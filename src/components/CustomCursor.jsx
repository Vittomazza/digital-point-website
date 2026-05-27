import React from 'react';
import { useCustomCursor } from '../hooks/useCustomCursor';

export const CustomCursor = () => {
  const { cursorRef, cursorDotRef } = useCustomCursor();

  return (
    <>
      {/* Cursore principale */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none z-[9999] opacity-0 transition-all duration-200"
        style={{
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.4)',
        }}
      />

      {/* Punto centrale */}
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999] opacity-0 transition-all duration-200"
        style={{
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      />

      {/* Nasconde cursore default */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};