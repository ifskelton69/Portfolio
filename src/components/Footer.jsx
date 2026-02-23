import React, { useState } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/adityabirajdar' },
    { name: 'Github', href: 'https://github.com/ifskelton69' },
    { name: 'Leetcode', href: 'https://leetcode.com/u/ifskelton69' },
    { name: 'Credly', href: 'https://www.credly.com/users/adityabirajdar' },
  ]
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
const [status, setStatus] = useState(null)

const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

const handleSubmit = (e) => {
  e.preventDefault()
  setStatus('sending')
  const subject = encodeURIComponent(`Message from ${formData.name}`)
  const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
  window.open(`mailto:adityabirajdar0305@gmail.com?subject=${subject}&body=${body}`)
  setTimeout(() => { setStatus('sent'); setFormData({ name: '', email: '', message: '' }) }, 500)
}

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/ifskelton69',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/adityabirajdar',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: 'Email',
      href: 'mailto:adityabirajdar0305@example.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ]


  return (
    <footer id="footer" className="relative bg-[#fff9f1fff9f1] overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-[#56e592] mb-8"></div>
      {/* Snow Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:bg-white/20 transition-all duration-300">
                <span className="font-bold text-lg bg-gradient-to-br from-cyan-300 to-purple-300 bg-clip-text text-transparent">AB</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-cyan-400/85 bg-clip-text text-transparent">
                  Aditya Birajdar
                </h3>
              </div>
            </div>

            <p className="text-gray-400 mb-4 max-w-md">
              Building innovative web solutions with modern technologies.
              Passionate about creating exceptional user experiences and writing clean, efficient code.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:bg-amber-600 hover:border-transparent hover:scale-110 transition-all duration-300 shadow-md"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <svg className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Form */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Send a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your message..."
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold hover:opacity-90 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
              >
                {status === 'sending' ? 'Opening...' : status === 'sent' ? '✓ Done!' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>



        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-200 text-sm">
              © {currentYear} <span className="font-semibold text-amber-200">Aditya Birajdar</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with ❤️ using React & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors duration-300">
              Privacy Policy
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 to-yellow-400 group-hover:w-full transition-all duration-500 ease-out" />
            </a>
            <span className="text-gray-400">•</span>
            <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="mt-8 text-center">
          <a href="#home" className="inline-flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-green-400 transition-all duration-300">
            <span className="text-green-400">➜</span>
            <span className="hover:underline underline-offset-4">cd ~/home</span>
          </a>
        </div>
      </div>

      {/* CSS for snow animation */}
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
    </footer>
  )
}

export default Footer