import { CodeXml, Mail, X } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [resumeOpen, setResumeOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    "React",
    "Node.js",
    "JavaScript",
    "Tailwind CSS",
    "MongoDB",
    "Express.js",
    "Socket.IO",
    "Docker",
    "postgreSQL",
  ];

  return (
    <>
      {resumeOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setResumeOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setResumeOpen(false)}
              className="absolute top-3 right-3 z-10 p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X size={18} className="text-gray-600" />
            </button>

            <iframe
              src="/Aditya_Birajdar_Resume.pdf"
              className="w-full h-full"
              title="Resume"
            />
          </div>
        </div>
      )}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-300/30 rounded-full animate-snow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 20}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2  items-center ">
            {/* Left Content */}
            <div
              className={`space-y-8 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
              {/* Main Heading */}
              <div className="space-y-4 pt-6">
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  <span className="block text-white">
                    Hi, Aditya here.{" "}
                    <span
                      aria-hidden="true"
                      className="inline-block origin-[70%_70%] animate-wave"
                    >
                      👋
                    </span>
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-300 font-medium">
                  21-year-old software engineer from India.
                </p>
                <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
                  I create bugs, blame the framework, fix them with more code,
                  and pray nobody asks how any of it works.
                </p>
              </div>

              {/* Skill Tags */}
              {/* <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:border-blue-400/60 hover:text-white hover:shadow-lg hover:bg-white/[0.08] transition-all duration-300 cursor-default hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div> */}
              {/* Social Links */}
              <div className="flex space-x-5 pb-3">
                {[
                  {
                    name: "GitHub",
                    placeholder: "Github",
                    url: "https://github.com/ifskelton69",
                    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                  },
                  {
                    name: "LinkedIn",
                    placeholder: "LinkedIn",
                    url: "https://linkedin.com/in/adityabirajdar",
                    icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 bg-white/[0.04] backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:border-blue-400/60 hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
                    placeholder={social.placeholder}
                  >
                    <svg
                      className="w-5 h-5 text-gray-300 group-hover:text-blue-300 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}

                {/* ✅ LeetCode — fixed: removed duplicate href */}
                <a
                  href="mailto:adityabirajdar0305@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/[0.04] backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:border-blue-400/60 hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-gray-300 group-hover:text-blue-300 transition-colors" />
                </a>
                <a
                  href="https://leetcode.com/u/if_skelton/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/[0.04] backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:border-blue-400/60 hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
                  aria-label="LeetCode"
                >
                  <CodeXml className="w-5 h-5 text-gray-300 group-hover:text-blue-300 transition-colors" />
                </a>
                <div className="flex gap-4"></div>
                {/* View Resume — opens modal */}
                <button
                  onClick={() => setResumeOpen(true)}
                  className="group px-5 py-3 border border-white/15 bg-white/[0.04] text-white rounded-xl font-semibold hover:border-white/30 hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Resume</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>{" "}
            {/* ✅ Fixed: closing tag for Left Content */}
            {/* Right Content - Profile Image */}
            <div className="mx-auto w-full max-w-sm relative">
              {/* glow behind the frame */}
              <div className="absolute -inset-2  opacity-40 blur-2xl rounded-[2rem]" />

              {/* gradient border */}
              <div className="relative mx-auto max-w-xs p-[2px] rounded-[2rem] bg-gradient-to-tr from-[#919090] via-white/10 to-[#919090]">
                <div className="rounded-[calc(2rem-2px)] overflow-hidden bg-[#0b0614]">
                  <img
                    src="/image.png"
                    alt="Aditya Birajdar"
                    className="block w-full aspect-square object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes spin-reverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }
          @keyframes gradient {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          @keyframes snow {
            0% {
              transform: translateY(0) translateX(0);
            }
            100% {
              transform: translateY(100vh) translateX(50px);
            }
          }
          .animate-snow {
            animation: snow linear infinite;
          }
          @keyframes wave {
            0%,
            60%,
            100% {
              transform: rotate(0deg);
            }
            10%,
            30% {
              transform: rotate(14deg);
            }
            20%,
            40% {
              transform: rotate(-8deg);
            }
            50% {
              transform: rotate(10deg);
            }
          }
          .animate-wave {
            animation: wave 2s ease-in-out 1;
            transform-origin: 70% 70%;
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          .animate-spin-reverse {
            animation: spin-reverse 15s linear infinite;
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;
