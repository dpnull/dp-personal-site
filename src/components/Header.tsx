"use client";

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col gap-8">
      <div>
        <h1 className="text-5xl font-bold tracking-tighter leading-10 text-slate-200">
          Brittany Chiang
        </h1>
        <h2 className="mt-3 text-xl font-medium tracking-tight leading-7 text-slate-200">
          Front End Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-6 text-slate-400">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
      </div>
    </header>
  );
};

export default Header; 