'use client';
import React, { useEffect, useRef } from 'react';

const FlashlightEffect: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`;
        ref.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -1,
        background: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          pointerEvents: 'none',
          zIndex: -1,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(30,40,80,0.20) 0%, rgba(10,10,20,0.0) 80%)',
          width: '625px',
          height: '625px',
          borderRadius: '50%',
        }}
      />
    </div>
  );
};

export default FlashlightEffect; 