"use client";

import React from 'react';
import ExperienceItem from './ExperienceItem';
import { ExperienceItemProps } from './types';

const ExperienceSection: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  const experiences = [
    {
      dateRange: "Apr 2019 – Feb 2020",
      title: "Game Designer at WRKSHP",
      company: "WRKSHP",
      companyUrl: "",
      description: "Designed beatmaps and rhythm gameplay for mobile titles like Beat Fever using a strict music theory handbook to ensure timing consistency and musical alignment. Worked remotely in an Agile team, iterating based on player data, and helped refine difficulty curves to improve user retention and engagement.",
      technologies: ["Agile", "Remote Collaboration"],
      previousPositions: [],
      links: [],
    }
  ];

  const role = "Offshore Rhythm Game Designer for Beat Fever";

  return (
    <section aria-label="Work experience" className="mb-36" style={{ minHeight: '40vh', height: '100%' }} {...props}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div>
          <ol>
            {experiences.map((experience, index) => (
              <ExperienceItem key={index} {...experience} role={role} />
            ))}
          </ol>
        </div>
        <div style={{
          color: '#94a3b8',
          fontWeight: 'regular',
          fontSize: '0.8rem',
          textAlign: 'center',
          letterSpacing: '0',
          opacity: 0.7,
          marginTop: 'auto',
        }}>
          This site was built with Next.js, React, TypeScript, and Tailwind CSS.
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 