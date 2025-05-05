"use client";

import React from 'react';
import TechTag from './TechTag';
import { ExperienceItemProps } from './types';

interface ExperienceItemFullProps extends ExperienceItemProps {
  role?: string;
  bullets?: string[];
  description: React.ReactNode;
}

const ExperienceItem: React.FC<ExperienceItemFullProps> = ({
  dateRange,
  title,
  company,
  companyUrl,
  description,
  technologies,
  previousPositions,
  links,
  role,
  bullets
}) => {
  return (
    <li className="mb-12 text-left">
      <div className="block rounded-lg transition-all duration-150 p-6 hover:shadow-[0_-6px_16px_0_rgba(0,0,0,0.45)] hover:bg-slate-800/60 focus:bg-slate-800/60 group">
        <div className="grid grid-cols-[80px_1fr] gap-6 items-center relative pb-1">
          {/* Date on the left */}
          <div className="text-xs font-semibold tracking-wide leading-4 uppercase text-slate-500 col-span-1">
            {dateRange}
          </div>
          {/* Details on the right */}
          <div className="col-span-1">
            <div className="flex flex-col gap-0.5">
              <span className="font-bold text-base text-slate-200 group-hover:text-cyan-300 transition-colors duration-150">
                {title}
              </span>
              {role && (
                <span className="text-sm text-slate-200 mt-0.5">{role}</span>
              )}
            </div>
            <p className="mt-2 text-sm" style={{ color: 'var(--foreground)' }}>
              {description}
            </p>
            {/* Bullets if any */}
            {bullets && bullets.length > 0 && (
              <ul className="list-disc ml-5 mt-2 text-sm text-slate-300">
                {bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
            {/* Technologies if any */}
            {technologies && technologies.length > 0 && (
              <ul className="flex flex-wrap mt-3">
                {technologies.map((tech, i) => (
                  <TechTag key={i} name={tech} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ExperienceItem; 