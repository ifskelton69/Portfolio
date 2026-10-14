import React, { useState, useEffect, useRef } from "react";
import TypingBadge from "../store/TypingBadge";

const projects = [
  {
    title: "PlacedBloom - Placement Assistant",
    category: "fullstack",
    image: "/finally-placed.png",
    description:
      "All-in-one Placement Prep Platform built with React, offering resume management, DSA tracking, curated resources, and AI interview feedback — everything to boost your job readiness.",
    technologies: ["React", "Node.js", "MongoDB", "AI APIs"],
    color: "from-indigo-500 to-blue-400",
    accent: "#6366f1",
    github: "https://github.com/ifskelton69/PlacedBloom",
    live: "/.",
    highlights: [
      "Resume Parsing",
      "AI Job Matching",
      "Mock Interviews",
      "Third-Party API Integration",
      "100+ Structured Data Points",
    ],
  },
  {
    title: "EcoSimple - Environmental Rewards",
    category: "fullstack",
    image: "/ecosimple.png",
    description:
      "Built an ESP32 rover with GPS, environmental sensors, and a Flask dashboard for real-time monitoring and alerts.",
    technologies: ["React", "Flask", "Tailwind CSS", "Weather API"],
    color: "from-indigo-500 to-blue-400",
    accent: "#6366f1",
    github: "https://github.com/ifskelton69/Ecosimple.git",
    live: "https://ecosimple-gg9gphrts-aditya-birajdars-projects.vercel.app/",
    highlights: [
      "Real-time Alert",
      "Scroll Effects",
      "Modern Design",
      "Weather Integration",
      "Fullstack Backend with Flask",
    ],
  },
  {
    title: "APERA - Sentiment Analysis",
    category: "ai",
    image: "/apera.png",
    description:
      "NLP-based tool that processes and analyzes text data to determine emotional tone and sentiment patterns.",
    technologies: ["Python", "NLP", "Machine Learning", "Flask"],
    color: "from-emerald-500 to-teal-400",
    accent: "#10b981",
    github: "https://github.com/ifskelton69/qwik_chat.git",
    live: "https://apera-omega.vercel.app/",
    highlights: ["NLP Processing", "Sentiment Detection", "Data Visualization"],
  },
  {
    title: "AI ChatBot - Real-time Conversational App",
    category: "ai",
    image: "/chatbot.png",
    description:
      "Chatbot that enables real-time conversations using modern web technologies and Hugging Face models.",
    technologies: ["React", "Express", "Hugging Face API", "Tailwind CSS"],
    color: "from-green-500 to-emerald-400",
    accent: "#10b981",
    github: "https://github.com/ifskelton69/chatbot.git",
    live: "https://chatbot-delta-inky.vercel.app/",
    highlights: [
      "Real-time Chat",
      "AI Responses",
      "REST API Integration",
      "Clean UI",
    ],
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "ai", label: "AI / ML" },
];

const ProjectCard = ({ project, index, isVisible }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.5s ease, transform 0.5s ease`,
        transitionDelay: `${index * 100}ms`,
        position: "relative",
        zIndex: hovered ? 10 : 1,
      }}
      className="group rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm cursor-pointer hover:border-white/30 transition-colors duration-300"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top, ${project.accent}18 0%, transparent 70%)`,
        }}
      />

      <div className="p-4 sm:p-5">
        {/* Header */}
        <div className="flex flex-col-reverse items-start gap-2 mb-3">
          <h3 className="text-base font-semibold text-white leading-snug">
            {project.title}
          </h3>
          <span className="shrink-0 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md border border-white/10 text-gray-500">
            {project.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-[0.92rem] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights - slide in on hover */}
        <div
          className="overflow-hidden"
          style={{
            maxHeight: hovered ? "160px" : "0",
            opacity: hovered ? 1 : 0,
            transition: "max-height 0.35s ease, opacity 0.3s ease",
          }}
        >
          <ul className="mb-4 space-y-1">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="text-xs text-gray-400 flex items-center gap-2"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`}
                />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-400 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-cyan-400 text-black text-sm font-medium hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-16 lg:py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Same container width as the Experience section */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        {/* Header */}
        <div
          className="text-center mb-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <TypingBadge
            text="C:Admin\project\portfolio> git add projects"
            className="text-gray-300"
          />
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-4 tracking-tight">
            <span className="text-[#b1b1b1] bg-clip-text ">Projects</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.2s",
          }}
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === f.id
                  ? "bg-[#6b6b6ba6] text-white border-transparent shadow-lg shadow-blue-500/20"
                  : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* 2 projects per row (1 on mobile). items-start keeps the other card
            from stretching when one expands on hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          <p className="text-gray-500 text-sm mb-5">Want to see more?</p>
          <a
            href="https://github.com/ifskelton69"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-[#626161a2] hover:border-white/20 hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All on GitHub
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;