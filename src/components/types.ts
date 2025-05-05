import React from 'react';

export interface Experience {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
}

export interface BlogPost {
  title: string;
  date: string;
  summary: string;
}

export interface BlogPostProps {
  title: string;
  year: string;
  imageUrl: string;
  imageAlt: string;
  url: string;
}

export interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
}

export interface SocialLinkProps {
  platform: string;
  url: string;
  ariaLabel: string;
  svgContent: string;
}

export interface ExperienceItemProps {
  dateRange: string;
  title: string;
  company: string;
  companyUrl: string;
  description: React.ReactNode;
  technologies: string[];
  previousPositions?: string[];
  links?: {
    text: string;
    url: string;
  }[];
}

export interface ProjectItemProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  projectUrl: string;
  technologies?: string[];
  githubStars?: number;
  githubUrl?: string;
  links?: {
    text: string;
    url: string;
  }[];
  installCount?: string;
  installUrl?: string;
}

export interface TechTagProps {
  name: string;
} 