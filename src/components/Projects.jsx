import React, { useState, useEffect, useRef } from 'react'
import TypingBadge from '../store/TypingBadge'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const sectionRef = useRef(null)

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

  const projects = [
    {
      title: 'ResumeAI',
      category: 'ai',
      description: 'AI-powered resume builder that creates professional, ATS-friendly resumes. Features intelligent content suggestions and multiple templates.',
      technologies: ['React', 'Node.js', 'NLP', 'MongoDB'],
      image: '🤖',
      color: 'from-blue-500 to-cyan-500',
      github: '#',
      live: '#',
      highlights: ['AI Content Generation', 'ATS Optimization', 'Multiple Templates']
    },
    {
      title: 'Real-time Chat App',
      category: 'fullstack',
      description: 'Feature-rich chat application with real-time messaging, typing indicators, and file sharing capabilities using Socket.IO.',
      technologies: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
      image: '💬',
      color: 'from-purple-500 to-pink-500',
      github: '#',
      live: '#',
      highlights: ['Real-time Messaging', 'File Sharing', 'User Authentication']
    },
    {
      title: 'APERA Sentiment Analysis',
      category: 'ai',
      description: 'NLP-based sentiment analysis tool that processes and analyzes text data to determine emotional tone and sentiment patterns.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Flask'],
      image: '📊',
      color: 'from-green-500 to-emerald-500',
      github: '#',
      live: '#',
      highlights: ['NLP Processing', 'Sentiment Detection', 'Data Visualization']
    },
    {
      title: 'Answer Sheet Evaluator',
      category: 'ai',
      description: 'OCR-powered system for automated evaluation of answer sheets with intelligent text recognition and grading algorithms.',
      technologies: ['Python', 'OCR', 'OpenCV', 'TensorFlow'],
      image: '📝',
      color: 'from-orange-500 to-red-500',
      github: '#',
      live: '#',
      highlights: ['OCR Technology', 'Auto Grading', 'Text Recognition']
    },
    {
      title: 'Animated Portfolio',
      category: 'frontend',
      description: 'Modern portfolio website with smooth GSAP animations and Locomotive Scroll for an engaging user experience.',
      technologies: ['React', 'GSAP', 'Locomotive Scroll', 'Tailwind CSS'],
      image: '✨',
      color: 'from-indigo-500 to-purple-500',
      github: '#',
      live: '#',
      highlights: ['Smooth Animations', 'Scroll Effects', 'Modern Design']
    },
    {
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'Full-featured e-commerce platform with product management, cart functionality, and secure payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      color: 'from-yellow-500 to-orange-500',
      github: '#',
      live: '#',
      highlights: ['Payment Gateway', 'Admin Dashboard', 'Order Management']
    }
  ]

  const filters = [
    { id: 'all', name: 'All Projects'  },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'ai', name: 'AI/ML' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-[fff9f1fff9f1]"
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
                    <TypingBadge  text="C:Admin\project\portfolio> git add experience" className="text-green-400" />

          <h2 className="text-4xl md:text-5xl font-bold text-[#94a4fd] mb-4">
            Featured Projects
          </h2>
          <p className="text-[#f8dba5] max-w-2xl mx-auto mb-6">
            A showcase of my work—from AI-powered applications to full-stack web solutions
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-56 bg-gradient-to-r from-transparent to-blue-500"></div>
            <div className="w-2 h-2 rotate-45 bg-purple-500"></div>
            <div className="h-px w-56 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-500 hover:text-blue-600'
              }`}
            >
              <span>{filter.icon}</span>
              <span>{filter.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Icon/Image */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
                <span className="text-8xl relative z-10 group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </span>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-600 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-600 mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/ifskelton69"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>View All Projects on GitHub</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* CSS for animations */}
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

export default Projects