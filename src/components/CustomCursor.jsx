import React, { useState, useEffect } from 'react';
import { useCustomCursor } from '../hooks/useCustomCursor';

export const CustomCursor = () => {
  const { cursorRef, cursorDotRef } = useCustomCursor();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(
      'button, a, input, textarea, select'
    );

    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    elements.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Cursore principale */}
      <div
        ref={cursorRef}
        className={`fixed rounded-full pointer-events-none z-[9999] opacity-0 transition-all duration-200 ${
          isHovering ? 'w-12 h-12 border-white' : 'w-8 h-8 border-blue-500'
        } border-2`}
        style={{
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
          boxShadow: isHovering
            ? '0 0 15px rgba(255,255,255,0.4)'
            : '0 0 10px rgba(59, 130, 246, 0.5)',
        }}
      />

      {/* Punto cursore */}
      <div
        ref={cursorDotRef}
        className={`fixed rounded-full pointer-events-none z-[9999] opacity-0 transition-all duration-200 ${
          isHovering ? 'w-3 h-3 bg-white' : 'w-2 h-2 bg-blue-500'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Nascondi cursore default */}
      <style>{`
        * {
          cursor: none !important;
        }
        a, button, input, textarea, select {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};