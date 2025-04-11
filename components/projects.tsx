import type React from "react"
import { ExternalLink, Github } from "lucide-react"
import ProjectSvg from "./project-svg"
import { Button } from "@/components/ui/button"

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">My <span className="text-blue-600">Projects</span></h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Check out some of my recent work and personal projects.</p>
      </div>
      <div className="grid grid-cols-1 gap-8 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 rounded-2xl">
        <ProjectCard
          title="Discord Bot"
          description="A powerful Discord bot with 200+ commands for server management, moderation, entertainment, and more."
          icon={<ProjectSvg type="discord-bot" />}
          tags={["Discord.js", "Node.js", "MongoDB", "API Integration"]}
          demoUrl="#"
          repoUrl="https://github.com/Hqzdev/yoku-discord"
          delay={0}
        />
        <ProjectCard
          title="AI Chat Interface"
          description="Interactive chat interface for the AI ecosystem with real-time responses and multi-modal capabilities."
          icon={<ProjectSvg type="chat" />}
          tags={["React", "WebSockets", "TypeScript", "Lumia AI"]}
          demoUrl="https://lurenai.vercel.app/"
          repoUrl="https://github.com/Hqzdev/LumiaAI"
          delay={100}
        />
        <ProjectCard
          title="Neural Network"
          description="Custom neural network implementation with advanced natural language processing capabilities."
          icon={<ProjectSvg type="neural-network" />}
          tags={["Python", "TensorFlow", "PyTorch", "NLP"]}
          demoUrl="https://lurenai.vercel.app/"
          repoUrl="https://github.com/Hqzdev/LumiaAI"
          delay={200}
        />
        <ProjectCard
          title="AI Dashboard"
          description="Comprehensive dashboard for monitoring and managing Lumiam for Admin, usage statistics, and performance metrics."
          icon={<ProjectSvg type="dashboard" />}
          tags={["Next.js","Tailwind CSS"]}
          demoUrl="https://dashboard-lumia.vercel.app/"
          repoUrl="https://github.com/Hqzdev/Lumia-Dashboard"
          delay={300}
        />
        <ProjectCard
          title="Documentation Portal"
          description="Detailed documentation for the AI ecosystem with interactive examples, tutorials, and API references."
          icon={<ProjectSvg type="documentation" />}
          tags={["Next.js", "Docusaurus", "Technical Writing"]}
          demoUrl="https://luren-documentation.vercel.app"
          repoUrl="https://github.com/Hqzdev/Lumia-Documentation"
          delay={400}
        />
        <ProjectCard
          title="API Generator"
          description="Tool for automatically generating API endpoints and documentation based on AI model capabilities."
          icon={<ProjectSvg type="api-generator" />}
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
  icon: React.ReactNode
  tags: string[]
  demoUrl: string
  repoUrl: string
  delay: number
}

function ProjectCard({ title, description, icon, tags, demoUrl, repoUrl, delay }: ProjectCardProps) {
  return (
    <div
      className="border-2 border-gray-200 overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white/80 backdrop-blur-sm"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="w-full h-full">
            {icon}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" asChild className=" bg-blue-600 hover:bg-blue-600 text-white font-medium py-2 px-6 hover:text-white rounded-2xl transition-all duration-300 transform hover:scale-105">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:text-blue-600">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
