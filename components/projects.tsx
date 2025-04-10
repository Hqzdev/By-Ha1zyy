'use client'

import { motion } from 'framer-motion'
import ProjectSvg from './project-svg'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'AI Chat Assistant',
    description: 'Intelligent chat bot powered by machine learning',
    type: 'chat' as const,
    github: 'https://github.com/yourusername/ai-chat',
    demo: 'https://ai-chat-demo.com',
    tags: ['Next.js', 'TypeScript', 'Machine Learning']
  },
  {
    title: 'Neural Network Project',
    description: 'Deep learning implementation for image recognition',
    type: 'neural-network' as const,
    github: 'https://github.com/yourusername/neural-net',
    demo: 'https://neural-net-demo.com',
    tags: ['Python', 'TensorFlow', 'Computer Vision']
  },
  {
    title: 'Dashboard Analytics',
    description: 'Real-time data visualization dashboard',
    type: 'dashboard' as const,
    github: 'https://github.com/yourusername/dashboard',
    demo: 'https://dashboard-demo.com',
    tags: ['React', 'D3.js', 'Node.js']
  }
]

export const Projects = () => {
  return (
    <section id="projects" className="py-8 md:py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="rounded-2xl border-2 border-gray-200 overflow-hidden group hover:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
            >
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <ProjectSvg type={project.type} className="w-12 h-12 md:w-16 md:h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs md:text-sm bg-blue-100 text-blue-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors text-sm md:text-base"
                  >
                    <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors text-sm md:text-base"
                  >
                    <FaExternalLinkAlt className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
