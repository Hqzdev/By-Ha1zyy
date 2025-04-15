"use client"

import { useEffect, useState } from "react"
import Link from "next/link"


export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = ["Machine Learning Developer", "Web Developer"]
  const role = roles[loopNum % roles.length]

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping()
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting])

  const handleTyping = () => {
    // Current role from the array
    const i = loopNum % roles.length
    const fullText = roles[i]

    // Update display text based on whether we're deleting or typing
    setDisplayText(
      isDeleting ? fullText.substring(0, displayText.length - 1) : fullText.substring(0, displayText.length + 1),
    )

    // Set typing speed - faster when deleting
    setTypingSpeed(isDeleting ? 50 : 150)

    // If finished typing the full text
    if (!isDeleting && displayText === fullText) {
      // Pause at the end of typing
      setTypingSpeed(2000)
      setIsDeleting(true)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setTypingSpeed(500)
    }
  }

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-10">
          <div className="w-full space-y-6 md:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 animate-fade-in leading-loose">
              <style jsx>{`
                .wave {
                  animation-name: wave-animation;
                  animation-duration: 2.1s;
                  animation-iteration-count: infinite;
                  transform-origin: 70% 70%;
                  display: inline-block;
                }

                @keyframes wave-animation {
                  0% { transform: rotate(0deg); }
                  10% { transform: rotate(14deg); }
                  20% { transform: rotate(-8deg); }
                  30% { transform: rotate(14deg); }
                  40% { transform: rotate(-4deg); }
                  50% { transform: rotate(10deg); }
                  60% { transform: rotate(0deg); }
                  100% { transform: rotate(0deg); }
                }
              `}</style>
              <div className="space-y-4">
                <div>
                  <span className="md-3">Hi, There!{" "}</span>
                  <span 
                    className="wave" 
                    role="img" 
                    aria-labelledby="wave"
                  >
                    👋🏻
                  </span>
                </div>
                <div>
                  I'm <span className="text-blue-600">Ha1zyy</span>
                </div>
              </div>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 h-14">
              <span className="text-blue-600">{displayText}</span>
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-lg">
              Building intelligent solutions with machine learning and creating beautiful, responsive web applications.
            </p>
            <div className="flex gap-4 md:justify-start">
              <Link href="#contact">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg py-2 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-md">
                  Contact Me
                </button>
              </Link>
              <Link href="#projects">
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium text-lg py-2 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105">
                  View Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
