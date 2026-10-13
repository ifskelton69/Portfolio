import React, { useEffect, useRef, useState } from "react";
import TypingBadge from "../store/TypingBadge";


const work = [
  {
    company: "Saiket System",
    role: "Web Developer",
    duration: "Dec 2025 - Feb 2026",
    logo: "/saiket.png",
    points: [
      "Implemented robust CRUD operations and data management modules using Node.js and MongoDB, streamliningapplication functionality and improving data integrity by 25%.",
      "Collaborated with the frontend team to integrate backend services, tested API endpoints using Postman, and resolvedintegration issues to ensure seamless application functionality and reliable performance.",
    ],
    links: [{ label: "Website", href: "https://saiket.in/" }],
  },
  {
    company: "AIS Solution Pvt. Ltd.",
    role: "Python Developer Intern",
    duration: "Jun 2023 - Aug 2023",
    logo: "/ais.jpeg",
    points: [
      "Built a job recommendation system using supervised machine learning, performing data preprocessing, featureengineering, and candidate profiling to improve job-role matching.",
      "Applied Label Encoding and feature vectorization on 50+ skill features, and evaluated models using Precision, Recall,and F1-score to optimize recommendation accuracy.",
    ],
    links: [{ label: "Website", href: "https://aissolutions.net/" }],
  },
];

const education = [
  {
    company: "Sinhgad Institute of Technology and Science, Pune",
    role: "Bachelor of Engineering in Electronics and Telecommunication",
    duration: "Sep 2024 - Jun 2027",
    logo: "/clg.png",
    points: [
      "Won Internal Sihgad Hackathon 2025",
      "Secured 2nd position in Avishkar Intercollegiate Ideathon 2025",
    ],
    links: [],
  },
  {
    company: "Government Polytechnic, Pune",
    role: "Diploma in Computer Engineering",
    duration: "May 2021 - May 2024",
    logo: "/gpp.png",
    points: [
      "25th rank among 300+ team in national level hackathon",
    ],
    links: [],
  },
];

/* ------------------------------------------------------------------ */

const GlobeIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="9" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"
    />
  </svg>
);

const Logo = ({ src, name }) => {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-white border border-white/10 overflow-hidden flex items-center justify-center">
      {src && !failed ? (
        <img
          src={src}
          alt={`${name} logo`}
          className="w-full h-full object-contain p-1"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-sm font-bold text-slate-700">{initials}</span>
      )}
    </div>
  );
};

const Entry = ({ item }) => (
  <li className="relative flex gap-4">
    <Logo src={item.logo} name={item.company} />

    <div className="min-w-0 flex-1 pb-8">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
        <h3 className="text-lg font-semibold text-white leading-snug">
          {item.company}
        </h3>
        <span className="text-sm text-slate-400 whitespace-nowrap">
          {item.duration}
        </span>
      </div>
      <p className="text-slate-400 text-[0.95rem]">{item.role}</p>

      {item.points.length > 0 && (
        <ul className="mt-3 list-disc pl-5 space-y-1.5 text-[0.92rem] leading-relaxed text-slate-200 marker:text-slate-400">
          {item.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}

      {item.links.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-xs font-semibold text-slate-900 hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              <GlobeIcon />
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  </li>
);

const Experience = () => {
  const [tab, setTab] = useState("work");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = tab === "work" ? work : education;

  const tabClass = (name) =>
    `flex-1 rounded-lg py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
      tab === name
        ? "bg-[#05060a] text-white"
        : "text-slate-400 hover:text-slate-200"
    }`;

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="bg-[#05060a] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <TypingBadge
            text="C:Admin\project\portfolio> git add Experience.jsx"
            className="text-gray-300"
          />
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-4 tracking-tight">
            <span className="text-[#b1b1b1] bg-clip-text">Experience</span>
          </h2>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Experience or education"
          className="flex gap-1 rounded-xl border border-white/10 bg-slate-800/60 p-1"
        >
          <button
            role="tab"
            aria-selected={tab === "work"}
            className={tabClass("work")}
            onClick={() => setTab("work")}
          >
            Work
          </button>
          <button
            role="tab"
            aria-selected={tab === "education"}
            className={tabClass("education")}
            onClick={() => setTab("education")}
          >
            Education
          </button>
        </div>

        {/* Timeline card */}
        <div
          role="tabpanel"
          className="mt-3 rounded-xl border border-white/20 bg-[#05060a] p-4 sm:p-5"
        >
          <ol className="relative">
            {/* vertical line, runs through the logo column */}
            <span
              aria-hidden="true"
              className="absolute left-6 top-6 bottom-6 w-px -translate-x-1/2 bg-white/10"
            />
            {items.map((item) => (
              <Entry key={item.company} item={item} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;