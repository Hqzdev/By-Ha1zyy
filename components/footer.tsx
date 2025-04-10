"use client"

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/yourusername'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/yourusername'
    },
    {
      name: 'Telegram',
      icon: FaTelegram,
      url: 'https://t.me/yourusername'
    }
  ]

  return (
    <footer className="mt-20 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Let's Connect</h2>
              <p className="text-gray-600 text-sm md:text-base">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-6 h-6" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="w-full max-w-4xl border-t border-gray-200 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
              <p>© {currentYear} Your Name. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
