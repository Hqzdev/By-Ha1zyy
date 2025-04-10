import type React from "react"
import { Brain, Code, Database, Palette, BarChartIcon as ChartBar, Server, Globe, Cpu } from "lucide-react"

export default function Skills() {
  return (
    <section id="skills" className="py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 animate-fade-in">My Skills</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Here are some of the technologies and tools I specialize in.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SkillCard
          icon={<Brain className="h-8 w-8 text-blue-600" />}
          title="Machine Learning"
          skills={["TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks"]}
          delay={0}
        />
        <SkillCard
          icon={<ChartBar className="h-8 w-8 text-blue-600" />}
          title="Data Science"
          skills={["Data Analysis", "Pandas", "NumPy", "Visualization"]}
          delay={100}
        />
        <SkillCard
          icon={<Cpu className="h-8 w-8 text-blue-600" />}
          title="AI Development"
          skills={["NLP", "Computer Vision", "Reinforcement Learning", "GPT Integration"]}
          delay={200}
        />
        <SkillCard
          icon={<Code className="h-8 w-8 text-blue-600" />}
          title="Frontend Development"
          skills={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
          delay={300}
        />
        <SkillCard
          icon={<Database className="h-8 w-8 text-blue-600" />}
          title="Databases"
          skills={["MongoDB", "PostgreSQL"]}
          delay={400}
        />
        <SkillCard
          icon={<Palette className="h-8 w-8 text-blue-600" />}
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
      className="rounded-2xl border-2 border-gray-200 p-6 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 hover:scale-110 bg-white/80 backdrop-blur-sm"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="text-gray-600">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
