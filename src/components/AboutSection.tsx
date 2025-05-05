"use client";

import React from 'react';

const AboutSection: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <section aria-label="About me" className="mb-36" {...props}>
      <div>
        <p className="mb-4 leading-relaxed">
          <span className="text-slate-200">Computer Science graduate</span> with deep expertise in <span className="text-slate-200">object-oriented programming</span> and strong proficiency across <span className="text-slate-200">low-level systems</span>, full-stack development, and <span className="text-slate-200">scalable architecture</span>. Skilled in <span className="text-slate-200">C++, C#</span>, and modern frameworks, with a focus on performance, clean design patterns, and maintainable code. Experienced across compilers, real-time systems, and AI-integrated applications.
        </p>
        <p className="mb-4 leading-relaxed">
          I especially enjoy OOP and low-level architecture—so much so that I was <span className="text-slate-200">selected to support peers through Homework Club</span> thanks to my strong performance in systems and design modules. Outside of tech, I'm passionate about dance games—<span className="text-slate-200">winner of the 2024 UK Pump It Up tournament</span>—alongside high-intensity training, skincare, and customizing my <span className="text-slate-200">Linux</span> workflow with <span className="text-slate-200">i3</span> and <span className="text-slate-200">Neovim</span>.
        </p>
      </div>
    </section>
  );
};

export default AboutSection; 