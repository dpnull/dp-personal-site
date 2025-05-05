"use client";

import React from 'react';
import { SocialLinkProps } from './types';

const SocialLink: React.FC<SocialLinkProps> = ({ platform, url, ariaLabel, svgContent }) => {
  return (
    <li className="list-item shrink-0 mr-5 text-xs leading-4 text-left">
      <a
        target="_blank"
        rel="noreferrer noopener"
        aria-label={ariaLabel}
        title={platform}
        href={url}
        className="ease-in-out duration-[0.15s] transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter]"
      >
        <div
          className="overflow-x-hidden overflow-y-hidden w-6 h-6 align-middle fill-slate-400"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      </a>
    </li>
  );
};

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      platform: "GitHub",
      url: "https://github.com/dpnull/",
      ariaLabel: "GitHub (opens in a new tab)",
      svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6" aria-hidden="true" style=" fill: rgb(148, 163, 184); height: 24px; overflow-clip-margin: content-box; overflow-x: hidden; overflow-y: hidden; vertical-align: middle; width: 24px;"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>`
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/dominik-przewozny",
      ariaLabel: "LinkedIn (opens in a new tab)",
      svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true" style=" fill: rgb(148, 163, 184); height: 24px; overflow-clip-margin: content-box; overflow-x: hidden; overflow-y: hidden; vertical-align: middle; width: 24px;"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>`
    }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <ul aria-label="Social media" className="flex flex-row items-center gap-4 mt-8">
        {socialLinks.map((link, index) => (
          <SocialLink key={index} {...link} />
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks; 