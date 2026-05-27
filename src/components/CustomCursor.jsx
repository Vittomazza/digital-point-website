import React from 'react';
import { useCustomCursor } from '../hooks/useCustomCursor';

// ─────────────────────────────────────────────────────────────
// CustomCursor
// Cursore custom con contrasto automatico:
//   • sfondo chiaro  → ring + dot scuri  (slate-900)
//   • sfondo scuro   → ring + dot bianchi
//   • sfondo medio   → ring + dot blu    (default)
//
// Il colore cambia con transizione CSS da 220ms.
// Il ring segue il mouse con lerp (lag visivo intenzionale).
// Il dot segue il mouse immediatamente.
//
// Uso:
//   import { CustomCursor } from './components/CustomCursor';
//   // In App.jsx / layout root:
//   <CustomCursor />
// ─────────────────────────────────────────────────────────────

export const CustomCursor = () => {
  const { cursorRef, cursorDotRef } = useCustomCursor();

  return (
    <>
      {/* ── Ring (cerchio grande, lerp) ── */}
      <div
        ref={cursorRef}
        style={{
          position:        'fixed',
          width:           32,
          height:          32,
          borderRadius:    '50%',
          borderWidth:     2,
          borderStyle:     'solid',
          // borderColor, boxShadow e mixBlendMode vengono
          // impostati dinamicamente dal hook in base al contrasto
          borderColor:     'rgba(59, 130, 246, 0.9)',
          boxShadow:       '0 0 12px rgba(59,130,246,0.45), 0 0 4px rgba(59,130,246,0.45)',
          mixBlendMode:    'multiply',
          pointerEvents:   'none',
          zIndex:          9999,
          opacity:         0,
          transform:       'translate(-50%, -50%)',
          // Transizione fluida del colore (non della posizione — quella è via JS)
          transition:      'border-color 220ms ease, box-shadow 220ms ease, opacity 300ms ease, transform 200ms cubic-bezier(0.23,1,0.32,1)',
          willChange:      'left, top, border-color, box-shadow, transform',
        }}
      />

      {/* ── Dot (cerchio piccolo, segue immediatamente) ── */}
      <div
        ref={cursorDotRef}
        style={{
          position:        'fixed',
          width:           8,
          height:          8,
          borderRadius:    '50%',
          backgroundColor: 'rgba(59, 130, 246, 1)',
          boxShadow:       '0 0 6px rgba(59,130,246,0.45)',
          pointerEvents:   'none',
          zIndex:          9999,
          opacity:         0,
          transform:       'translate(-50%, -50%)',
          transition:      'background-color 220ms ease, box-shadow 220ms ease, opacity 300ms ease',
          willChange:      'left, top, background-color',
        }}
      />

      {/* ── Nascondi cursore nativo ── */}
      <style>{`
        *, *::before, *::after {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};