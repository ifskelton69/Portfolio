import React, { useState, useEffect, useRef } from 'react'
import TypingBadge from '../store/TypingBadge'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '💻',
      skills: [
        'React.js',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Responsive Web Design',
        'REST API Integration'
      ]
    },
    {
      title: 'Backend Development',
      icon: '🧠',
      skills: [
        'Node.js',
        'Express.js',
        'RESTful API Development',
        'Authentication (JWT)'
      ]
    },
    {
      title: 'Database',
      icon: '🗄',
      skills: [
        'MongoDB',
        'PostgreSQL'
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: '🔧',
      skills: [
        'Git & GitHub',
        'Postman',
        'VS Code',
        'Vercel (Frontend Deployment)',
        'Render (Backend Deployment)'
      ]
    },
    {
      title: 'Core Concepts',
      icon: '📚',
      skills: [
        'Data Structures & Algorithms (Basic)',
        'OOP Concepts'
      ]
    }
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-[#fff9f1fff9f1] py-20 lg:py-32 -mb-10 "
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
                    <TypingBadge  text="C:Admin\project\portfolio> git add skills" className="text-green-400" />

          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-8">
            Skills & Technologies
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-56 bg-gradient-to-r from-transparent to-blue-500"></div>
            <div className="w-2 h-2 rotate-45 bg-purple-500"></div>
            <div className="h-px w-56 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-white rounded-xl p-8 shadow-md transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skill}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <span className="w-2 h-2 bg-gray-800 rounded-full flex-shrink-0"></span>
                    <span className="text-base">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <img src="https://leetcard.jacoblin.cool/if_skelton?theme=dark" alt="LeetCode Stats" />

        </div>
      </div>
    </section>
  )
}

export default Skills