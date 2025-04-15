"use client"

import React from "react"
import { motion } from "framer-motion"

const skillGroups = [
  {
    category: "Frontend",
    description: "Modern technologies for building beautiful and fast user interfaces.",
    skills: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript"
    ]
  },
  {
    category: "ML & AI",
    description: "Tools and libraries for machine learning and artificial intelligence.",
    skills: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "NLP",
      "Computer Vision"
    ]
  },
  {
    category: "Data",
    description: "Working with data, analysis, visualization, and storage of large datasets.",
    skills: [
      "Pandas",
      "NumPy",
      "Data Analysis",
      "Visualization",
      "SQL",
      "PostgreSQL",
      "MongoDB"
    ]
  },
  {
    category: "Languages",
    description: "Programming languages I use in my daily work.",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL"
    ]
  },
  {
    category: "Tools",
    description: "Supporting tools for development, design, and automation.",
    skills: [
      "Git",
      "Docker",
      "Figma",
      "Jupyter"
    ]
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring" }
  })
}

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-16 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">My <span className="text-blue-600">Skills</span></h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Here are some of the technologies and tools I specialize in.</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            className="flex flex-col items-center bg-white border-2 border-blue-200 rounded-3xl shadow-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
          >
            <h3 className="text-xl font-bold text-blue-700 mb-2 text-center drop-shadow-sm">{group.category}</h3>
            <p className="text-gray-600 text-center mb-4">{group.description}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm bg-blue-100 text-black px-4 py-1 rounded-full font-medium border border-blue-200 shadow-sm hover:bg-blue-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
