import { CheckCircle, Circle } from "lucide-react"

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">My Learning Roadmap</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here's my journey and future learning plans in the tech world.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 transform -translate-y-1/2"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <RoadmapItem
            title="Frontend Fundamentals"
            date="2020 - 2021"
            description="Mastered HTML, CSS, JavaScript, and responsive design principles."
            completed={true}
            delay={0}
          />

          <RoadmapItem
            title="React Ecosystem"
            date="2021 - 2022"
            description="Learned React.js, state management with Redux, and component libraries."
            completed={true}
            delay={100}
          />

          <RoadmapItem
            title="Machine Learning Basics"
            date="2022 - 2023"
            description="Studied ML fundamentals, algorithms, and data preprocessing techniques."
            completed={true}
            delay={200}
          />

          <RoadmapItem
            title="Deep Learning"
            date="2023 - Present"
            description="Working with neural networks, NLP, and computer vision models."
            completed={true}
            delay={300}
          />

          <RoadmapItem
            title="MLOps & Deployment"
            date="2024"
            description="Learning model deployment, monitoring, and scaling ML systems."
            completed={false}
            delay={400}
          />

          <RoadmapItem
            title="Advanced AI Research"
            date="2024 - 2025"
            description="Planning to explore cutting-edge AI research and contribute to open-source projects."
            completed={false}
            delay={500}
          />
        </div>
      </div>
    </section>
  )
}

interface RoadmapItemProps {
  title: string
  date: string
  description: string
  completed: boolean
  delay: number
}

function RoadmapItem({ title, date, description, completed, delay }: RoadmapItemProps) {
  return (
    <div className="relative pt-10 pb-4 px-4" style={{ animationDelay: `${delay}ms` }}>
      {/* Circle on the timeline */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        {completed ? (
          <CheckCircle className="h-8 w-8 text-blue-600 bg-white rounded-full" />
        ) : (
          <Circle className="h-8 w-8 text-blue-300 bg-white rounded-full" />
        )}
      </div>

      {/* Content card */}
      <div className="rounded-2xl border-2 border-gray-200 p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm h-full">
        <div className="flex flex-col items-center text-center">
          <span className="text-sm text-blue-500 font-medium mb-2">{date}</span>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}
