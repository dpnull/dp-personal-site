import React, { useState } from 'react';
import TechTag from './TechTag';

const languageFromTitle = (title: string) => {
  const match = title.match(/\((\d{4})\)\s*–\s*([A-Za-z+#]+)/);
  return match ? match[2] : null;
};

const projects = [
  {
    title: "Engine Framework",
    year: "2021",
    tech: ["C#", ".NET", "ECS", "Design Patterns", "OOP"],
    link_text: "github.com/dpnull/NullRPG",
    link_url: "https://github.com/dpnull/NullRPG",
    description: (
      <>
        A modular 2D game engine built from scratch in C# using strong OOP principles. Includes a custom renderer, keybinding system, and field-of-view logic, structured with design patterns like Factory, ECS, and Mediator to ensure clarity, performance, and reusability. Written in over <span className="text-slate-200">5,000 lines of code</span> with <span className="text-slate-200">170+ commits</span> on GitHub.
      </>
    )
  },
  {
    title: "Planup",
    year: "2024",
    tech: ["React Native", "Node.js", "Express", "MongoDB", "GPT-4", "JWT", "Full-Stack"],
    link_text: "github.com/dpnull/Planup",
    link_url: "https://github.com/dpnull/Planup",
    description: (
      <>
        An AI-powered task scheduler that generates personalized daily plans using GPT-4 and productivity techniques like Pomodoro and Eisenhower Matrix. Built with the <span className="text-slate-200">MERN stack</span>, it features secure <span className="text-slate-200">JWT authentication</span>, <span className="text-slate-200">CORS protection</span>, and a <span className="text-slate-200">modular backend</span> with efficient prompt templating to reduce token usage and improve API performance.
      </>
    )
  },
  {
    title: "Deep Learning Model",
    year: "2024",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "Deep Learning"],
    link_text: "github.com/dpnull/fashion-mnist-cnn",
    link_url: "https://github.com/dpnull/fashion-mnist-cnn",
    description: "A convolutional neural network trained on the Fashion-MNIST dataset, reaching 91.44% accuracy. The model uses data augmentation, early stopping, and L2 regularization to improve generalization while avoiding overfitting."
  },
  {
    title: "Labyrinth Solver",
    year: "2024",
    tech: ["Python", "ROS", "Algorithms", "Embedded Systems", "Robotics"],
    description: "A robotics group project using ROS to build a modular control system for solving mazes. Compared A* and Dijkstra algorithms using real-time sensor data and dynamic replanning to benchmark real-world performance."
  },
  {
    title: "Assembler",
    year: "2023",
    tech: ["C++", "ASM", "CMake", "Bash", "Low-Level Systems"],
    link_text: "github.com/dpnull/SAL-Assembler",
    link_url: "https://github.com/dpnull/SAL-Assembler",
    description: (
      <>
        A two-pass assembler in C++ that parses a SAL assembly language into machine code. Resolves forward references, handles extended operands, and emits clean binary output, with CMake and Bash scripts for build automation. <span className="text-slate-200">94/100 marks</span>.
      </>
    )
  },
  {
    title: "Parser",
    year: "2023",
    tech: ["C++", "Compiler Design", "CMake", "Parsing", "Language Tools"],
    link_text: "github.com/dpnull/DOPL-Parser",
    link_url: "https://github.com/dpnull/DOPL-Parser",
    description: (
      <>
        A recursive-descent parser for a Pascal-style language, complete with a custom lexer and robust error reporting. Built for extensibility, laying the groundwork for a full compiler with semantic validation and codegen. <span className="text-slate-200">92/100 marks</span>.
      </>
    )
  },
  {
    title: "GP Booking System",
    year: "2022",
    tech: ["Java", "JUnit", "Git", "Agile", "OOP"],
    description: (
      <>
        A team-built appointment system developed in Java with JUnit testing and Agile sprints. <span className="text-slate-200">Led the design of the OOP architecture</span> with flexible features like appointment rescheduling and clear interface-driven design. Focused on modular OOP architecture so teammates could work efficiently within the system.
      </>
    )
  }
];

const ProjectList: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  return (
    <ul className="mt-8">
      {projects.map((project, idx) => {
        const displayTitle = project.title;
        const blockLink = project.link_url || '#';
        const dimmed = hoveredIdx !== null && hoveredIdx !== idx;
        return (
          <li
            key={idx}
            className="mb-12 text-left"
            style={{ opacity: dimmed ? 0.67 : 1, transition: 'opacity 0.2s' }}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {project.link_url ? (
              <a
                href={blockLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg transition-all duration-150 p-6 hover:shadow-[0_-6px_16px_0_rgba(0,0,0,0.45)] hover:bg-slate-800/60 focus:bg-slate-800/60 group"
                style={{ textDecoration: 'none' }}
                onMouseUp={e => e.currentTarget.blur()}
              >
                <div className="grid grid-cols-[80px_1fr] gap-6 items-center relative pb-1">
                  {/* Year on the left */}
                  <div className="text-xs font-semibold tracking-wide leading-4 uppercase text-slate-500 col-span-1">
                    {project.year}
                  </div>
                  {/* Details on the right */}
                  <div className="col-span-1">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-base text-slate-200 group-hover:text-cyan-300 transition-colors duration-150">
                        {displayTitle}
                      </span>
                      <span className="relative flex items-center min-w-[7em] overflow-x-visible">
                        <span className="absolute left-0 flex items-center h-full top-1/2 translate-y-1/2 transition-opacity duration-300 group-hover:opacity-0 opacity-100">
                          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 24 24' style={{ display: 'block' }} className="align-middle">
                            <path fill='currentColor' d='M7.757 16.243a1 1 0 0 1 0-1.414l7.072-7.072H9a1 1 0 1 1 0-2h7a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-5.828l-7.072 7.072a1 1 0 0 1-1.414-1.414z'/>
                          </svg>
                        </span>
                        <span className="absolute left-0 ml-[10px] text-xs text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                          go to {project.link_text || project.link_url}
                        </span>
                      </span>
                    </div>
                    <p className="mt-2 text-sm" style={{ color: 'var(--foreground)' }}>
                      {project.description}
                    </p>
                    <ul className="flex flex-wrap mt-3">
                      {project.tech.map((tech, i) => (
                        <TechTag key={i} name={tech} />
                      ))}
                    </ul>
                  </div>
                </div>
              </a>
            ) : (
              <div
                className="block rounded-lg transition-all duration-150 p-6 hover:shadow-[0_-6px_16px_0_rgba(0,0,0,0.45)] hover:bg-slate-800/60 focus:bg-slate-800/60 group cursor-default"
              >
                <div className="grid grid-cols-[80px_1fr] gap-6 items-center relative pb-1">
                  {/* Year on the left */}
                  <div className="text-xs font-semibold tracking-wide leading-4 uppercase text-slate-500 col-span-1">
                    {project.year}
                  </div>
                  {/* Details on the right */}
                  <div className="col-span-1">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-base text-slate-200 group-hover:text-cyan-300 transition-colors duration-150">
                        {displayTitle}
                      </span>
                    </div>
                    <p className="mt-2 text-sm" style={{ color: 'var(--foreground)' }}>
                      {project.description}
                    </p>
                    <ul className="flex flex-wrap mt-3">
                      {project.tech.map((tech, i) => (
                        <TechTag key={i} name={tech} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList; 