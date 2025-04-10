'use client'

import { motion } from 'framer-motion'

const roadmapItems = [
  {
    year: '2022',
    title: 'Frontend Development',
    items: ['HTML & CSS', 'JavaScript', 'React Basics', 'Responsive Design']
  },
  {
    year: '2023',
    title: 'Advanced Frontend',
    items: ['TypeScript', 'Next.js', 'Tailwind CSS', 'State Management']
  },
  {
    year: '2024',
    title: 'Full Stack Development',
    items: ['Node.js', 'Express', 'Databases', 'API Development']
  }
]

export const Roadmap = () => {
  return (
    <section id="roadmap" className="py-8 md:py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          My Learning Path
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200" />
          
          <div className="space-y-8 md:space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-start`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-8`}>
                  <div className="p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm">
                    <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((skill, skillIndex) => (
                        <motion.li
                          key={skill}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.2 + skillIndex * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                          <span className="text-gray-600 text-sm md:text-base">{skill}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
