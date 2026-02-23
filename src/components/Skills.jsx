import React, { useState, useEffect, useRef } from 'react'
import TypingBadge from '../store/TypingBadge'

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-400',
    glow: 'rgba(59,130,246,0.15)',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'REST API Integration']
  },
  {
    title: 'Backend',
    color: 'from-violet-500 to-purple-400',
    glow: 'rgba(139,92,246,0.15)',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth']
  },
  {
    title: 'Database',
    color: 'from-emerald-500 to-teal-400',
    glow: 'rgba(16,185,129,0.15)',
    skills: ['MongoDB', 'PostgreSQL']
  },
  {
    title: 'Tools',
    color: 'from-orange-500 to-amber-400',
    glow: 'rgba(249,115,22,0.15)',
    skills: ['Git & GitHub', 'Postman', 'VS Code', 'Vercel', 'Render']
  },
  {
    title: 'Core Concepts',
    color: 'from-rose-500 to-pink-400',
    glow: 'rgba(244,63,94,0.15)',
    skills: ['DSA (Basic)', 'OOP Concepts']
  }
]

const SkillCard = ({ category, index, isVisible }) => {
  return (
    <div
      className="relative group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease, transform 0.6s ease`,
        transitionDelay: `${index * 120}ms`
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
        style={{ background: category.glow, transform: 'scale(1.05)' }}
      />

      {/* Card */}
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 h-full overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
        {/* Top gradient line */}
        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${category.color} opacity-70`} />

        {/* Corner decoration */}
        <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br ${category.color} opacity-20 blur-sm`} />

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <h3 className="relative text-lg font-bold text-white tracking-wide group/title">
            {category.title}
            <span
              className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${category.color} group-hover:w-full transition-all duration-500 ease-out`}
            />
          </h3>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-xs font-medium text-gray-300 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/25 transition-all duration-200 cursor-default"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: `opacity 0.4s ease`,
                transitionDelay: `${index * 120 + i * 60}ms`
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden -mb-20"
    >
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
      {/* Background */}
      <div className="absolute inset-0 bg-[#fff9f1fff9f1]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease'
          }}
        >
          <TypingBadge text="C:Admin\project\portfolio> git add skills" className="text-green-400" />

          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-4 tracking-tight">
            Skills &{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-84 bg-gradient-to-r from-transparent to-blue-500" />
            <div className="w-1.5 h-1.5 rotate-45 bg-violet-200" />
            <div className="h-px w-84 bg-gradient-to-l from-transparent to-violet-500" />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {skillCategories.map((category, i) => (
            <SkillCard
              key={category.title}
              category={category}
              index={i}
              isVisible={isVisible}
            />
          ))}

          {/* LeetCode Card */}
          <div
            className="relative group md:col-span-2 lg:col-span-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              transitionDelay: `${skillCategories.length * 120}ms`
            }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
              style={{ background: 'rgba(255,161,22,0.12)', transform: 'scale(1.05)' }}
            />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 h-full overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 to-yellow-400 opacity-70" />

              <div className="flex items-center gap-3 mb-5">

                <h3 className="relative text-lg font-bold text-white tracking-wide">
                  LeetCode Stats
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 to-yellow-400 group-hover:w-full transition-all duration-500 ease-out" />
                </h3>
              </div>

              <img
                src="https://leetcard.jacoblin.cool/if_skelton?theme=dark&font=Noto%20Sans"
                alt="LeetCode Stats"
                className="w-full rounded-xl opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills