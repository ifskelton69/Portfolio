import React, { useState, useEffect, useRef } from "react";
import TypingBadge from "../store/TypingBadge";

const stats = [
  { label: "Projects", value: "15+" },
  { label: "Year Experience", value: "1 >" },
  // { label: "Technologies", value: "10+" },
  { label: "GitHub Commits", value: "50+" },
];

const highlights = [
  {
    title: "UI/UX Oriented",
    description:
      "Focused on building clean, responsive, and user-friendly interfaces with attention to modern design principles.",
  },
  {
    title: "Secure Systems",
    description:
      "Implemented JWT authentication, protected routes, and secure API structures in full-stack applications.",
  },
  {
    title: "Real-time Apps",
    description:
      "Developed chat applications using Socket.IO for seamless communication.",
  },
  {
    title: "Problem Solver",
    description:
      "Strong foundation in Data Structures & Algorithms, focused on writing optimized and scalable solutions.",
  },
  {
    title: "Modern Tech",
    description:
      "Constantly exploring cutting-edge technologies and best practices.",
  },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#05060a] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <TypingBadge
            text="C:Admin\project\portfolio> git add About.jsx"
            className="text-gray-300"
          />
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-4 tracking-tight">
            <span className="text-[#b1b1b1] bg-clip-text">About</span>
          </h2>
          
        </div>

        {/* Main card */}
        <div className="rounded-xl border border-white/20 bg-[#05060a] p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-white">
            Software Engineer :
          </h3>

          <div className="mt-3 space-y-3 text-[0.92rem] leading-relaxed text-slate-200">
            <p>
              I'm a Software Engineer specializing in the MERN stack, passionate
              about building scalable, real-world web applications. I enjoy
              turning complex problems into simple, clean, and user-friendly
              solutions.
            </p>
            <p>
              From developing AI-powered tools like ResumeAI to building
              real-time chat applications with Socket.IO, I focus on writing
              efficient code and creating seamless user experiences.
            </p>
            <p>
              Currently, I'm sharpening my DSA skills along with LLD concepts.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-6 ml-24 grid grid-cols-3 sm:grid-cols-3 gap-3 border-t border-white/10 pt-5">
            {" "}
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-xl font-semibold text-white">
                  {s.value}
                </div>
                <div className="text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="mt-6 border-t border-white/10 pt-5">
            <h3 className="text-lg font-semibold text-white">What I Do Best</h3>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-[0.92rem] leading-relaxed text-slate-200 marker:text-slate-400">
              {highlights.map((h) => (
                <li key={h.title}>
                  <span className="font-medium text-white">{h.title}:</span>{" "}
                  <span className="text-slate-300">{h.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
