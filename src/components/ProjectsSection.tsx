"use client";

import React from 'react';
import ProjectList from './ProjectList';

const ProjectsSection: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <section aria-label="Selected projects" className="mb-36" {...props}>
      <ProjectList />
    </section>
  );
};

export default ProjectsSection; 