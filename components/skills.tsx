'use client'

import { motion } from 'framer-motion'
import { FaReact, FaNode, FaDatabase, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss } from 'react-icons/si'

const skills = [
  { name: 'React', icon: FaReact, color: 'text-blue-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Node.js', icon: FaNode, color: 'text-green-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Database', icon: FaDatabase, color: 'text-gray-600' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
]

export const Skills = () => {
  return (
    <section id="skills" className="py-8 md:py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-4 md:p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 group bg-white/50 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
                <skill.icon className={`w-8 h-8 md:w-10 md:h-10 ${skill.color} group-hover:scale-110 transition-transform`} />
                <h3 className="text-base md:text-xl font-semibold text-gray-800 text-center md:text-left">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
