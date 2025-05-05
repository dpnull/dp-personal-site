"use client";

import React from 'react';
import { TechTagProps } from './types';

// const techColors: Record<string, string> = { ... } // Commented out because it's unused

const TechTag: React.FC<TechTagProps> = ({ name }) => {
  return (
    <div className="list-item mt-2 mr-2">
      <div className={
        `px-4 py-1 text-sm font-medium rounded-full bg-[#172133] text-cyan-300`
      }>
        {name}
      </div>
    </div>
  );
};

export default TechTag; 