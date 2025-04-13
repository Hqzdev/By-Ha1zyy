"use client"

import type { FC } from "react"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaPython, FaGithub, FaFigma } from "react-icons/fa"
import { SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si"
import { TbBrandThreejs } from "react-icons/tb"

interface Skill {
  name: string
  icon: React.ReactNode
  color: string
  proficiency: number
  description: string
}

const skills: Skill[] = [
  {
    name: "React",
    icon: <FaReact className="text-4xl" />,
    color: "#61DAFB",
    proficiency: 90,
    description: "Создание современных веб-приложений с использованием React и его экосистемы"
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-4xl" />,
    color: "#000000",
    proficiency: 85,
    description: "Разработка оптимизированных серверных приложений на Next.js"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-4xl" />,
    color: "#3178C6",
    proficiency: 85,
    description: "Типизированная разработка для улучшенной безопасности и поддерживаемости кода"
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-4xl" />,
    color: "#F7DF1E",
    proficiency: 90,
    description: "Создание интерактивных веб-приложений и работа с современными API"
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-4xl" />,
    color: "#339933",
    proficiency: 80,
    description: "Разработка серверной части приложений и API на Node.js"
  },
  {
    name: "Python",
    icon: <FaPython className="text-4xl" />,
    color: "#3776AB",
    proficiency: 75,
    description: "Автоматизация, обработка данных и backend разработка на Python"
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-4xl" />,
    color: "#06B6D4",
    proficiency: 95,
    description: "Создание современных адаптивных интерфейсов с Tailwind CSS"
  },
  {
    name: "Three.js",
    icon: <TbBrandThreejs className="text-4xl" />,
    color: "#000000",
    proficiency: 70,
    description: "Разработка 3D визуализаций и интерактивных веб-приложений"
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-4xl" />,
    color: "#47A248",
    proficiency: 80,
    description: "Работа с NoSQL базами данных и проектирование схем данных"
  },
  {
    name: "Git",
    icon: <FaGithub className="text-4xl" />,
    color: "#181717",
    proficiency: 85,
    description: "Контроль версий и совместная разработка с использованием Git"
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-4xl" />,
    color: "#F24E1E",
    proficiency: 75,
    description: "Дизайн интерфейсов и прототипирование в Figma"
  },
]

const Skills: FC = () => {
  return (
    <section id="skills" className="min-h-screen w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Навыки
        </h2>
        <div className="relative">
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          <div className="no-scrollbar flex w-full overflow-x-auto py-8">
            <div className="flex gap-6 px-20">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="group relative flex flex-col items-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div
                    className="relative mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 group-hover:shadow-xl"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                    <div className="absolute -bottom-2 h-1 w-full scale-x-0 rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {skill.name}
                  </span>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-24 left-1/2 z-20 w-48 -translate-x-1/2 scale-0 rounded-lg bg-gray-900 p-4 text-center text-sm text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <div className="mb-2 flex items-center justify-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-gray-700">
                        <div
                          className="h-full rounded-full bg-blue-600 transition-all duration-500"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium">{skill.proficiency}%</span>
                    </div>
                    <p className="text-xs text-gray-300">{skill.description}</p>
                    <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-gray-900" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  )
}

export default Skills
