import { Bot, MessageSquare, Brain, LayoutDashboard, FileText, LifeBuoy, Code } from "lucide-react"

interface ProjectSvgProps {
  type: "discord-bot" | "chat" | "neural-network" | "dashboard" | "documentation" | "support" | "api-generator"
  className?: string
}

export default function ProjectSvg({ type, className = "w-12 h-12" }: ProjectSvgProps) {
  const iconProps = {
    className: `${className} transition-all duration-300`,
  }

  switch (type) {
    case "discord-bot":
      return <Bot {...iconProps} className={`${iconProps.className} text-blue-500`} />
    case "chat":
      return <MessageSquare {...iconProps} className={`${iconProps.className} text-purple-500`} />
    case "neural-network":
      return <Brain {...iconProps} className={`${iconProps.className} text-pink-500`} />
    case "dashboard":
      return <LayoutDashboard {...iconProps} className={`${iconProps.className} text-blue-600`} />
    case "documentation":
      return <FileText {...iconProps} className={`${iconProps.className} text-green-500`} />
    case "support":
      return <LifeBuoy {...iconProps} className={`${iconProps.className} text-amber-500`} />
    case "api-generator":
      return <Code {...iconProps} className={`${iconProps.className} text-indigo-500`} />
    default:
      return <Code {...iconProps} className={`${iconProps.className} text-gray-500`} />
  }
}
