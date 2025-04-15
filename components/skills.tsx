import type React from "react"
import { Brain, Code, Database, Palette, BarChartIcon as ChartBar, Server, Globe, Cpu } from "lucide-react"

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">My <span className="text-blue-600">Skills</span></h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Here are some of the technologies and tools I specialize in.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 max-w-6xl mx-auto">
        <SkillCard
          icon={<Brain className="h-12 w-12 text-blue-600" />}
          title="Machine Learning"
          skills={["TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks"]}
          delay={0}
        />
        <SkillCard
          icon={<ChartBar className="h-12 w-12 text-blue-600" />}
          title="Data Science"
          skills={["Data Analysis", "Pandas", "NumPy", "Visualization"]}
          delay={100}
        />
        <SkillCard
          icon={<Cpu className="h-12 w-12 text-blue-600" />}
          title="AI Development"
          skills={["NLP", "Computer Vision", "Reinforcement Learning", "GPT Integration"]}
          delay={200}
        />
        <SkillCard
          icon={<Code className="h-12 w-12 text-blue-600" />}
          title="Frontend Development"
          skills={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
          delay={300}
        />
        <SkillCard
          icon={<Database className="h-12 w-12 text-blue-600" />}
          title="Databases"
          skills={["MongoDB", "PostgreSQL"]}
          delay={400}
        />
        <SkillCard
          icon={<Palette className="h-12 w-12 text-blue-600" />}
          title="Design"
          skills={["UI/UX Principles", "Figma", "Responsive Design", "Design Systems"]}
          delay={600}
        />
      </div>
    </section>
  )
}

interface SkillCardProps {
  icon: React.ReactNode
  title: string
  skills: string[]
  delay: number
}

function SkillCard({ icon, title, skills, delay }: SkillCardProps) {
  return (
    <div
      className="relative flex flex-col items-center bg-white border-2 border-blue-200 rounded-3xl shadow-xl p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 border border-blue-200 mb-4 shadow group-hover:bg-blue-200 transition">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-blue-700 mb-4 text-center drop-shadow-sm">{title}</h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill, index) => (
          <span key={index} className="text-sm bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-medium border border-blue-200 shadow-sm hover:bg-blue-200 transition">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
