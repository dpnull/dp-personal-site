"use client";

import React from 'react';

type NavLinksProps = {
  sectionIds: string[];
  activeId: string;
};

export default function NavLinks({ sectionIds, activeId }: NavLinksProps) {
  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  return (
    <nav aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {sectionIds.map(id => (
          <li key={id} className="list-item text-left">
            <a
              href={id === 'about' ? '#top' : `#${id}`}
              className={`flex items-center py-3 transition-colors duration-150 ${id === activeId ? 'text-slate-200' : 'text-slate-500'} hover:text-slate-200`}
              onClick={e => handleNavClick(e, id)}
            >
              <span className={`mr-4 ${id === activeId ? 'w-16' : 'w-8'} h-px ${id === activeId ? 'bg-slate-200' : 'bg-slate-600'} transition-all duration-150 hover:w-16 hover:bg-slate-200`} />
              <span className={`text-xs font-bold tracking-wider leading-4 uppercase ${id === activeId ? 'text-slate-200' : 'text-slate-500'} hover:text-slate-200`}>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
} 