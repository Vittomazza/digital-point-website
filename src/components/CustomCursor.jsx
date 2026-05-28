import React from 'react';
import { useCustomCursor } from '../hooks/useCustomCursor';

export const CustomCursor = () => {
  const { cursorRef, cursorDotRef } = useCustomCursor();

  return (
    <>
      {/* Cursore principale (cerchio grande) */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-white rounded-full pointer-events-none z-[9999] opacity-0 transition-opacity duration-300"
        style={{
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      />
      {/* Punto del cursore (cerchio piccolo) */}
      <div
        ref={cursorDotRef}
        className="fixed w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] opacity-0 transition-opacity duration-300"
        style={{
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      />
      {/* Nascondi il cursore di default */}
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
