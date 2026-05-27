import React from 'react';
import { useCustomCursor } from '../hooks/useCustomCursor';

export const CustomCursor = () => {
  const { cursorRef, cursorDotRef } = useCustomCursor();

  return (
    <>
      {/* Cursore principale (cerchio grande) */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none z-[9999] opacity-0 transition-opacity duration-300"
        style={{
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'multiply',
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
        }}
      />
      {/* Punto del cursore (cerchio piccolo) */}
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999] opacity-0 transition-opacity duration-300"
        style={{
          transform: 'translate(-50%, -50%)',
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
