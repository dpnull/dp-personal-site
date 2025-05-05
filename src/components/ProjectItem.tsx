"use client";

import React from 'react';
import TechTag from './TechTag';
import { ProjectItemProps } from './types';

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  projectUrl,
  technologies,
  githubStars,
  githubUrl,
  // Comment out unused variable
  // const links = ...
  installCount,
  installUrl
}) => {
  return (
    <li className="list-item mb-12 text-left">
      <div className="grid relative gap-4 pb-1 ease-in-out duration-[0.15s]">
        <div className="absolute -inset-y-4 -inset-x-6 z-0 rounded-md ease-in-out duration-[0.15s] transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter]" />
        <div className="z-10 order-2">
          <h3>
            <a
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} (opens in a new tab)`}
              href={projectUrl}
              className="inline-flex items-baseline font-medium leading-5 ease-in-out duration-[0.15s] text-slate-200 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter]"
            >
              <span className="absolute -inset-y-4 -inset-x-6 rounded" />
              <span>{title}</span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-5">
            {description}
          </p>

          {githubStars && githubUrl && (
            <a
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${githubStars} stars on GitHub (opens in a new tab)`}
              href={githubUrl}
              className="inline-flex relative items-center mt-2 text-sm font-medium leading-5 ease-in-out duration-[0.15s] text-slate-300 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter]"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"mr-1 h-3 w-3\" aria-hidden=\"true\" style=\" fill: rgb(203, 213, 225); height: 12px; margin-right: 4px; overflow-clip-margin: content-box; overflow-x: hidden; overflow-y: hidden; vertical-align: middle; width: 12px;\"><path fill-rule=\"evenodd\" d=\"M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule=\"evenodd\"></path></svg>`
                }}
                className="overflow-x-hidden overflow-y-hidden mr-1 w-3 h-3 align-middle fill-slate-300"
              />
              <span>{githubStars}</span>
            </a>
          )}

          {installCount && installUrl && (
            <a
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${installCount} installs on Visual Studio Code Marketplace (opens in a new tab)`}
              href={installUrl}
              className="inline-flex relative items-center mt-2 text-sm font-medium leading-5 ease-in-out duration-[0.15s] text-slate-300 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter]"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"mr-1 h-4 w-4\" aria-hidden=\"true\" style=\" fill: rgb(203, 213, 225); height: 16px; margin-right: 4px; overflow-clip-margin: content-box; overflow-x: hidden; overflow-y: hidden; vertical-align: middle; width: 16px;\"><path d=\"M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z\"></path><path d=\"M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z\"></path></svg>`
                }}
                className="overflow-x-hidden overflow-y-hidden mr-1 w-4 h-4 align-middle fill-slate-300"
              />
              <span>{installCount}</span>
            </a>
          )}

          {technologies && technologies.length > 0 && (
            <ul aria-label="Technologies used:" className="flex flex-wrap mt-2">
              {technologies.map((tech, index) => (
                <TechTag key={index} name={tech} />
              ))}
            </ul>
          )}
        </div>
        <img
          alt={imageAlt}
          width="200"
          height="48"
          decoding="async"
          src={imageUrl}
          className="object-cover order-1 max-w-full align-middle rounded border-2 ease-in-out aspect-video border-slate-200 border-opacity-10 duration-[0.15s] overflow-x-clip overflow-y-clip text-black text-opacity-0 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] w-[200px]"
        />
      </div>
    </li>
  );
};

export default ProjectItem; 