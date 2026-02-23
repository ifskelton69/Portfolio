import React, { useState, useEffect, useRef } from 'react'
import TypingBadge from '../store/TypingBadge'

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
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

  const experiences = [
    {
      company: 'Saiket System',
      role: 'Web Developer',
      duration: 'January 2026 – February 2026',
      website: 'https://saiket.in/internship/',
      logo: '/mnt/user-data/uploads/1770575839081_image.png', // Saiket logo
      description: 'Designed and implemented responsive web interfaces while contributing to frontend functionality and performance optimization. Participated in feature integration and real-world deployment workflows.',
      highlights: [
        'Built responsive UI components with React and Tailwind CSS',
        'Optimized frontend performance and user experience',
        'Collaborated on feature development and deployment',
        'Implemented modern design patterns and best practices'
      ],
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Git'],
      icon: '2',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      company: 'AIS Solution Pvt. Ltd.',
      role: 'Python Developer Intern',
      duration: 'June 2023 – August 2023',
      website: 'https://aissolution.in',
      logo: 'https://aissolution.in/assets/img/AIS-logo.png', // AIS Solution logo
      website: 'https://aissolution.in',
      logo: 'https://aissolution.in/wp-content/uploads/2023/01/AIS-Solution-1-100x100.png', // AIS Solution logo
      description: 'Developed and optimized Python-based solutions to support backend processes and automation workflows. Worked on debugging, improving code efficiency, and implementing structured programming practices within a collaborative team environment.',
      highlights: [
        'Developed Python scripts for backend automation',
        'Improved code efficiency and debugging processes',
        'Implemented structured programming practices',
        'Collaborated with cross-functional teams'
      ],
      technologies: ['Python', 'Backend Development', 'Automation', 'Git'],
      icon: '1',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-[#fff9f1fff9f1] -mt-20"
    >
      {/* Snow Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-snow"
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <TypingBadge  text="C:Admin\project\portfolio> git add experience" className="text-green-400" />

          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
        Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building expertise through hands-on projects and professional collaborations
          </p>
         <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-84 bg-gradient-to-r from-transparent to-blue-500" />
            <div className="w-1.5 h-1.5 rotate-45 bg-violet-200" />
            <div className="h-px w-84 bg-gradient-to-l from-transparent to-violet-500" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-transparent"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-gray-200 hover:scale-105 transition-all duration-300">
                      {/* Company Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            {/* Company Logo */}
                          
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {exp.company}
                              </h3>
                              <a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:text-blue-700 flex items-center space-x-1"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span className="text-xs">Visit Website</span>
                              </a>
                            </div>
                          </div>
                          <div className={`inline-block px-4 py-1.5 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-semibold mb-2`}>
                            {exp.role}
                          </div>
                          <p className="text-gray-500 text-sm flex items-center space-x-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{exp.duration}</span>
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="text-gray-900 font-semibold mb-3 flex items-center">
                          <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Key Contributions
                        </h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-start space-x-2">
                              <svg className="w-4 h-4 mt-0.5 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Hover Arrow */}
                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 items-center justify-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{exp.icon}</span>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </div>
            ))}
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

export default Experience