import { useEffect, useRef } from 'react';

export const useCustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Aggiorna il punto del cursore immediatamente
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      cursorDot.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      cursorDot.style.opacity = '0';
    };

    const animate = () => {
      // Animazione fluida del cursore principale
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;

      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return { cursorRef, cursorDotRef };
};
