import React from "react"

const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL"]
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"]
  },
  {
    category: "AI & ML",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Figma", "Jupyter"]
  }
]

export default function MySkills() {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          My <span className="text-blue-600">Skills</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Technologies and tools I use most often in my work.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {skills.map((group, idx) => (
          <div
            key={group.category}
            className="relative flex flex-col items-center bg-white border-2 border-blue-200 rounded-3xl shadow-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
          >
            <h3 className="text-xl font-bold text-blue-700 mb-4 text-center drop-shadow-sm">{group.category}</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="text-sm bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-medium border border-blue-200 shadow-sm hover:bg-blue-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 