"use client";

import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-start gap-8">
      <SocialLinks />
      <div className="max-w-md text-sm leading-5 text-slate-500 mt-8">
        Loosely designed in
      </div>
    </footer>
  );
};

export default Footer; 