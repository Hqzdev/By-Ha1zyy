import type React from "react"
import { ExternalLink, Github } from "lucide-react"
// import ProjectSvg from "./project-svg" // No longer needed

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Check out some of my recent work and personal projects.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Discord Bot"
          description="A powerful Discord bot with 200+ commands for server management, moderation, entertainment, and more."
          tags={["Discord.js", "Node.js", "MongoDB", "API Integration"]}
          demoUrl="#"
          repoUrl="https://github.com/Hqzdev/yoku-discord"
          delay={0}
        />
        <ProjectCard
          title="AI Chat Interface"
          description="Interactive chat interface for the AI ecosystem with real-time responses and multi-modal capabilities."
          tags={["React", "WebSockets", "TypeScript", "Lumia AI"]}
          demoUrl="https://lurenai.vercel.app/"
          repoUrl="https://github.com/Hqzdev/LumiaAI"
          delay={100}
        />
        <ProjectCard
          title="Neural Network"
          description="Custom neural network implementation with advanced natural language processing capabilities."
          tags={["Python", "TensorFlow", "PyTorch", "NLP"]}
          demoUrl="https://lurenai.vercel.app/"
          repoUrl="https://github.com/Hqzdev/LumiaAI"
          delay={200}
        />
        <ProjectCard
          title="AI Dashboard"
          description="Comprehensive dashboard for monitoring and managing Lumiam for Admin, usage statistics, and performance metrics."
          tags={["Next.js","Tailwind CSS"]}
          demoUrl="https://dashboard-lumia.vercel.app/"
          repoUrl="https://github.com/Hqzdev/Lumia-Dashboard"
          delay={300}
        />
        <ProjectCard
          title="Documentation Portal"
          description="Detailed documentation for the AI ecosystem with interactive examples, tutorials, and API references."
          tags={["Next.js", "Docusaurus", "Technical Writing"]}
          demoUrl="https://luren-documentation.vercel.app"
          repoUrl="https://github.com/Hqzdev/Lumia-Documentation"
          delay={400}
        />
        <ProjectCard
          title="API Generator"
          description="Tool for automatically generating API endpoints and documentation based on AI model capabilities."
          tags={["LumiaAPI", "Swagger", "Node.js", "Express"]}
          demoUrl="https://luren-documentation.vercel.app/apikey"
          repoUrl="https://github.com/Hqzdev/Lumia-Documentation"
          delay={500}
        />
      </div>
    </section>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  demoUrl: string
  repoUrl: string
  delay: number
}

function ProjectCard({ title, description, tags, demoUrl, repoUrl, delay }: ProjectCardProps) {
  return (
    <div
      className="relative flex flex-col items-center bg-white border-2 border-blue-200 rounded-3xl shadow-xl pt-8 pb-6 px-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2 text-center drop-shadow-sm">{title}</h3>
      <p className="text-gray-600 mb-4 text-center min-h-[56px]">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium border border-blue-200 shadow-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-auto w-full justify-center">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
        >
          <ExternalLink className="h-4 w-4" />
          Demo
        </a>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-blue-600 text-blue-700 font-semibold hover:bg-blue-50 transition"
        >
          <Github className="h-4 w-4" />
          Code
        </a>
      </div>
    </div>
  )
}
