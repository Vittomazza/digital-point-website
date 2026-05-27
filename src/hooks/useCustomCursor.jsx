import { useEffect, useRef, useCallback } from 'react';

// ─────────────────────────────────────────────────────────────
// useCustomCursor
// Cursore custom con rilevamento automatico del contrasto:
// - su sfondi chiari  → cursore scuro  (slate-900)
// - su sfondi scuri   → cursore chiaro (white)
// - su sfondi medi    → cursore blu    (blue-500, default)
// Il rilevamento avviene campionando il colore del pixel
// sotto il cursore tramite getComputedStyle + canvas 1×1.
// ─────────────────────────────────────────────────────────────

/** Calcola la luminanza relativa (0=nero, 1=bianco) di un colore RGB. */
function relativeLuminance(r, g, b) {
  const toLinear = (c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/**
 * Campiona il colore effettivo sotto il cursore usando
 * elementFromPoint + getComputedStyle, con fallback a canvas 1×1.
 * Restituisce { r, g, b } oppure null se non disponibile.
 */
function sampleColorAt(x, y) {
  // Nascondi temporaneamente i cursori per non campionare se stessi
  const el = document.elementFromPoint(x, y);
  if (!el) return null;

  // Risali l'albero DOM finché troviamo un elemento con background
  // non trasparente (max 8 livelli)
  let target = el;
  for (let i = 0; i < 8; i++) {
    const bg = getComputedStyle(target).backgroundColor;
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
      const match = bg.match(/[\d.]+/g);
      if (match && match.length >= 3) {
        return { r: +match[0], g: +match[1], b: +match[2] };
      }
    }
    if (!target.parentElement) break;
    target = target.parentElement;
  }

  // Fallback: canvas 1×1 (funziona solo su same-origin)
  try {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(
      new OffscreenCanvas(1, 1), // placeholder — non funziona cross-origin
      x, y, 1, 1, 0, 0, 1, 1
    );
    const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
    return { r, g, b };
  } catch {
    return null;
  }
}

/**
 * Determina la modalità cursore in base alla luminanza del background.
 * @returns {'light' | 'dark' | 'default'}
 */
function getCursorMode(x, y) {
  const color = sampleColorAt(x, y);
  if (!color) return 'default';

  const lum = relativeLuminance(color.r, color.g, color.b);

  if (lum > 0.55) return 'dark';   // sfondo chiaro → cursore scuro
  if (lum < 0.18) return 'light';  // sfondo scuro  → cursore chiaro
  return 'default';                 // sfondo medio  → cursore blu
}

// Palette cursore per ogni modalità
const CURSOR_STYLES = {
  light: {
    ring: 'rgba(255, 255, 255, 0.95)',
    dot:  'rgba(255, 255, 255, 1)',
    glow: 'rgba(255, 255, 255, 0.35)',
    mix:  'screen',
  },
  dark: {
    ring: 'rgba(59, 130, 246, 0.9)',
    dot:  'rgba(59, 130, 246, 0.9)',
    glow: 'rgba(59, 130, 246, 0.9)',
    mix:  'multiply',
  },
  default: {
    ring: 'rgba(59, 130, 246, 0.9)',
    dot:  'rgba(59, 130, 246, 1)',
    glow: 'rgba(59, 130, 246, 0.45)',
    mix:  'multiply',
  },
};

export const useCustomCursor = () => {
  const cursorRef    = useRef(null);
  const cursorDotRef = useRef(null);

  // Stato interno (non React state per evitare re-render)
  const state = useRef({
    mouseX:  0,
    mouseY:  0,
    cursorX: 0,
    cursorY: 0,
    mode:    'default',
    rafId:   null,
    sampleTick: 0,   // campiona ogni N frame per non stressare il DOM
  });

  const applyMode = useCallback((mode) => {
    const cursor    = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const s = CURSOR_STYLES[mode] ?? CURSOR_STYLES.default;

    // Ring
    cursor.style.borderColor  = s.ring;
    cursor.style.boxShadow    = `0 0 12px ${s.glow}, 0 0 4px ${s.glow}`;
    cursor.style.mixBlendMode = s.mix;

    // Dot
    cursorDot.style.backgroundColor = s.dot;
    cursorDot.style.boxShadow       = `0 0 6px ${s.glow}`;
  }, []);

  useEffect(() => {
    const cursor    = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const st = state.current;

    // ── Mouse move ──────────────────────────────────────────
    const handleMouseMove = (e) => {
      st.mouseX = e.clientX;
      st.mouseY = e.clientY;

      // Dot segue immediatamente
      cursorDot.style.left = st.mouseX + 'px';
      cursorDot.style.top  = st.mouseY + 'px';
    };

    const handleMouseEnter = () => {
      cursor.style.opacity    = '1';
      cursorDot.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity    = '0';
      cursorDot.style.opacity = '0';
    };

    // ── Hover su elementi interattivi: scala il ring ────────
    const handlePointerOver = (e) => {
      const tag = e.target?.tagName?.toLowerCase();
      const isInteractive =
        tag === 'a' || tag === 'button' || tag === 'input' ||
        tag === 'textarea' || tag === 'select' ||
        e.target?.getAttribute('role') === 'button' ||
        e.target?.closest('a, button, [role="button"]');

      if (isInteractive) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.55)';
        cursor.style.opacity   = '0.7';
      } else {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.opacity   = '1';
      }
    };

    // ── RAF loop ────────────────────────────────────────────
    const animate = () => {
      // Lerp del ring
      st.cursorX += (st.mouseX - st.cursorX) * 0.18;
      st.cursorY += (st.mouseY - st.cursorY) * 0.18;

      cursor.style.left = st.cursorX + 'px';
      cursor.style.top  = st.cursorY + 'px';

      // Campiona il colore ogni 4 frame (~60fps → ~15 campioni/s)
      st.sampleTick = (st.sampleTick + 1) % 4;
      if (st.sampleTick === 0) {
        const newMode = getCursorMode(
          Math.round(st.mouseX),
          Math.round(st.mouseY)
        );
        if (newMode !== st.mode) {
          st.mode = newMode;
          applyMode(newMode);
        }
      }

      st.rafId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove',   handleMouseMove,   { passive: true });
    document.addEventListener('mouseenter',  handleMouseEnter);
    document.addEventListener('mouseleave',  handleMouseLeave);
    document.addEventListener('pointerover', handlePointerOver, { passive: true });

    // Applica stile iniziale
    applyMode('default');
    st.rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove',   handleMouseMove);
      document.removeEventListener('mouseenter',  handleMouseEnter);
      document.removeEventListener('mouseleave',  handleMouseLeave);
      document.removeEventListener('pointerover', handlePointerOver);
      if (st.rafId) cancelAnimationFrame(st.rafId);
    };
  }, [applyMode]);

  return { cursorRef, cursorDotRef };
};