import type React from "react"
import { ExternalLink, Github, Bot, MessageSquare, Brain, LayoutDashboard, FileText, Code } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">My <span className="text-blue-600">Projects</span></h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Check out some of my recent work and personal projects.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Discord Bot"
          description="A powerful Discord bot with 200+ commands for server management, moderation, entertainment, and more."
          icon={<Bot className="w-12 h-12 text-blue-500" />}
          tags={["Discord.js", "Node.js", "MongoDB", "API Integration"]}
          demoUrl="#"
          repoUrl="#"
          delay={0}
        />
        <ProjectCard
          title="AI Chat Interface"
          description="Interactive chat interface for the AI ecosystem with real-time responses and multi-modal capabilities."
          icon={<MessageSquare className="w-12 h-12 text-purple-500" />}
          tags={["React", "WebSockets", "TypeScript", "Lumia AI"]}
          demoUrl="#"
          repoUrl="#"
          delay={100}
        />
        <ProjectCard
          title="Neural Network"
          description="Custom neural network implementation with advanced natural language processing capabilities."
          icon={<Brain className="w-12 h-12 text-pink-500" />}
          tags={["Python", "TensorFlow", "PyTorch", "NLP"]}
          demoUrl="#"
          repoUrl="#"
          delay={200}
        />
        <ProjectCard
          title="AI Dashboard"
          description="Comprehensive dashboard for monitoring and managing AI models, usage statistics, and performance metrics."
          icon={<LayoutDashboard className="w-12 h-12 text-blue-600" />}
          tags={["Next.js","Tailwind CSS"]}
          demoUrl="#"
          repoUrl="#"
          delay={300}
        />
        <ProjectCard
          title="Documentation Portal"
          description="Detailed documentation for the AI ecosystem with interactive examples, tutorials, and API references."
          icon={<FileText className="w-12 h-12 text-green-500" />}
          tags={["Next.js", "Docusaurus", "Technical Writing"]}
          demoUrl="#"
          repoUrl="#"
          delay={400}
        />
        <ProjectCard
          title="API Generator"
          description="Tool for automatically generating API endpoints and documentation based on AI model capabilities."
          icon={<Code className="w-12 h-12 text-indigo-500" />}
          tags={["LumiaAPI", "Swagger", "Node.js", "Express"]}
          demoUrl="#"
          repoUrl="#"
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
      className="rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-48 overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="transform transition-transform duration-500 hover:scale-110 p-6 rounded-full bg-white/80 shadow-sm">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" asChild className="hover:bg-blue-50 transition-colors">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="hover:bg-blue-50 transition-colors">
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
