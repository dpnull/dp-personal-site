"use client";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import React, { useState, useEffect, useRef } from "react";
import styles from "./PortfolioPage.module.css";
import SocialLinks from "./SocialLinks";
import NavLinks from "./NavLinks";
import { useScrollSpy } from "./hooks/useScrollSpy";
import FlashlightEffect from './FlashlightEffect';

export default function PortfolioPage() {
  const sectionIds = ["about", "projects", "experience"];
  const gridRef = useRef<HTMLDivElement>(null);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const onWheel = (e: WheelEvent) => {
      // No longer need to check content
    };
    grid.addEventListener("wheel", onWheel, { passive: false });
    return () => grid.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className={styles.grid} ref={gridRef}>
      <header className={styles.sidebar}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1 className="text-5xl font-bold tracking-tighter leading-10 text-slate-200" style={{ lineHeight: 1.1, letterSpacing: '-0.01em' }}>
              Dominik Przewozny
            </h1>
            <h2 className="text-xl font-medium tracking-tight leading-7 text-slate-200">
              Full-Stack & Low-Level
              Developer
            </h2>
            <p className="max-w-xs leading-6 text-slate-400">
                Building full-stack apps and low-level systems with OOP design 
            </p>
          </div>
          <NavLinks sectionIds={sectionIds} activeId={activeId} />
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <a href="mailto:dominicprzewozny@gmail.com" style={{ textDecoration: 'none', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                border: '2px solid var(--foreground)',
                borderRadius: 0,
                padding: '0.75rem 1.5rem',
                background: 'var(--background)',
                color: 'var(--foreground)',
                fontSize: '0.85rem',
                fontWeight: 500,
                textAlign: 'center',
                boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
                cursor: 'pointer',
                display: 'inline-block',
                transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                marginBottom: '1.5rem',
                width: '90%'
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'var(--foreground)';
                e.currentTarget.style.color = 'var(--background)';
                e.currentTarget.style.borderColor = 'var(--background)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'var(--background)';
                e.currentTarget.style.color = 'var(--foreground)';
                e.currentTarget.style.borderColor = 'var(--foreground)';
              }}
            >
              email: dominicprzewozny@gmail.com
            </div>
          </a>
          <SocialLinks />
        </div>
        <FlashlightEffect />
      </header>
      <main className={styles.content}>
        <AboutSection id="about" />
        <ProjectsSection id="projects" />
        <ExperienceSection id="experience" />
      </main>
    </div>
  );
} 