import React, { useState, useEffect, useRef } from 'react'
import TypingBadge from '../store/TypingBadge'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [stats, setStats] = useState({
    projects: 0,
    experience: 0,
    technologies: 0,
    commits: 0
  })
  const sectionRef = useRef(null)

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const finalStats = {
        projects: 15, experience: 1, technologies: 10, commits: 50

      }
      const duration = 2000
      const steps = 60
      const interval = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        setStats({
          projects: Math.floor((finalStats.projects / steps) * step),
          experience: Math.floor((finalStats.experience / steps) * step),
          technologies: Math.floor((finalStats.technologies / steps) * step),
          commits: Math.floor((finalStats.commits / steps) * step)
        })

        if (step >= steps) {
          setStats(finalStats)
          clearInterval(timer)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isVisible])


  const highlights = [
    {
      title: 'UI/UX Oriented',
      description: 'Focused on building clean, responsive, and user-friendly interfaces with attention to modern design principles.'
    }
    ,
    {
      title: 'Secure Systems',
      description: 'Implemented JWT authentication, protected routes, and secure API structures in full-stack applications.'
    },
    {

      title: 'Real-time Apps',
      description: 'Developed chat applications using Socket.IO for seamless communication'
    },
    {

      title: 'Problem Solver',
      description: 'Strong foundation in Data Structures & Algorithms, focused on writing optimized and scalable solutions.'

    },
    {

      title: 'Modern Tech',
      description: 'Constantly exploring cutting-edge technologies and best practices'
    }
  ]

  return (

    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-[#fff9f1fff9f1] -mb-20"
    >
      {/* Snow Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-snow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          ></div>
        ))}
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <TypingBadge text="C:Admin\project\portfolio> git add About" className="text-green-400" />

          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-8">
            Crafting Digital Experiences
          </h2>
          {/* <div className="w-124 h-1 mx-auto rounded-full bg-blue-500 shadow-[0_0_10px_2px_rgba(99,102,241,0.7)] "></div>    */}
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-56 bg-gradient-to-r from-transparent to-blue-500"></div>
            <div className="w-2 h-2 rotate-45 bg-[#a2c4fe]"></div>
            <div className="h-px w-56 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            {/* Main Description */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-3"></span>
                Full Stack Developer
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm a <span className="font-semibold text-blue-600">Full Stack Developer</span> specializing in the <span className="font-semibold text-purple-600">MERN stack</span>, passionate about building scalable, real-world web applications. I enjoy turning complex problems into simple, clean, and user-friendly solutions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                From developing AI-powered tools like <span className="font-semibold text-green-600">ResumeAI</span> to building real-time chat applications with <span className="font-semibold text-indigo-600">Socket.IO</span>, I focus on writing efficient code and creating seamless user experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Currently, I'm sharpening my <span className="font-semibold text-orange-600">Data Structures & Algorithms</span> skills while exploring modern technologies to stay ahead in the tech space.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Projects Completed', value: stats.projects, suffix: '+' },
                { label: 'Years Experience', value: stats.experience, suffix: '>' },
                { label: 'Technologies', value: stats.technologies, suffix: '+' },
                { label: 'GitHub Commits', value: stats.commits, suffix: '+' }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 border border-blue-100 shadow-md"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Download Resume Button */}
            <div className="flex gap-4">
              <a
                href="/Aditya_Birajdar_SDE_Intern_Resume.pdf"
                // download="Aditya_Birajdar_Resume.pdf"
                className="flex-1 group px-6 py-4 bg-[#1C7DF1] text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-amber-500 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>View Resume</span>
              </a>
              <a
                href="#projects"
                className="flex-1 px-6 py-4 bg-white text-gray-800 rounded-xl font-semibold shadow-lg hover:shadow-2xl border-2 border-gray-200 hover:border-blue-500 hover:scale-105 transition-all duration-300 text-center"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right Column - Highlights & Tech Stack */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#b5b5b5] mb-4">What I Do Best</h3>
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">{highlight.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for snow animation */}
      <style jsx>{`
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
      `}</style>
    </section>
  )
}

export default About