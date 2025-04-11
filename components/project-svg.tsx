import Image from "next/image"

interface ProjectSvgProps {
  type: "discord-bot" | "chat" | "neural-network" | "dashboard" | "documentation" | "support" | "api-generator"
  className?: string
}

export default function ProjectSvg({ type, className = "w-full h-full object-cover" }: ProjectSvgProps) {
  const imageProps = {
    className: `${className} transition-all duration-300`,
    width: 400,
    height: 300,
    alt: type
  }

  switch (type) {
    case "discord-bot":
      return <Image src="/images/discord.png" {...imageProps} className={`${imageProps.className} text-blue-500`} />
    case "chat":
      return <Image src="/images/ai.PNG" {...imageProps} className={`${imageProps.className} text-purple-500`} />
    case "neural-network":
      return <Image src="/images/chat.png" {...imageProps} className={`${imageProps.className} text-pink-500`} />
    case "dashboard":
      return <Image src="/images/dashboard.png" {...imageProps} className={`${imageProps.className} text-blue-600`} />
    case "documentation":
      return <Image src="/images/documentation.png" {...imageProps} className={`${imageProps.className} text-green-500`} />
    case "support":
      return (
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 280 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3fa9f5"/>
              <stop offset="100%" stopColor="#007aff"/>
            </linearGradient>
          </defs>
          <text x="0" y="50" style={{ fontFamily: '"Segoe UI", sans-serif', fontWeight: 'bold', fontSize: '40px', fill: 'url(#grad)' }}>
            Lumia<tspan fill="url(#grad)">AI</tspan>
          </text>
          <text x="0" y="90" style={{ fontFamily: '"Segoe UI", sans-serif', fontSize: '24px', fill: 'url(#grad)' }}>
            Support
          </text>
          <path d="M165 10 C168 6, 172 6, 175 10 C172 13, 168 13, 165 10 Z" fill="url(#grad)"/>
        </svg>
      )
    case "api-generator":
      return <Image src="/images/api-generator.png" {...imageProps} className={`${imageProps.className} text-indigo-500`} />
    default:
      return <Image src="/images/default.png" {...imageProps} className={`${imageProps.className} text-gray-500`} />
  }
}
