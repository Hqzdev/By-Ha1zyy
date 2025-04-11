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
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-lg md:text-3xl lg:text-4xl font-bold text-gray-900 animate-fade-in leading-loose">
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 h-14">
              <span className="text-blue-600">{displayText}</span>
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-lg">
              Building intelligent solutions with machine learning and creating beautiful, responsive web applications.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link href="#contact">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-md">
                  Contact Me
                </button>
              </Link>
              <Link href="#projects">
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105">
                  View Projects
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg h-80 md:h-96 animate-fade-in">
              <svg
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M773.9,428.7c-14.8-11.7-37.7-16.1-67.5-13.1c-25.5,2.6-54.9,10.8-84.9,23.8c-8.4-33.1-21.1-68.3-37.7-102.5 c26.5-82.3,27.1-148.2,1.7-172.2c-8.7-8.2-20.3-12.4-34.5-12.4c-29.7,0-66.6,22.3-103.1,62.1c-27.7,30.2-53.1,69.5-71.8,111.3 c-36.8,17.1-71.2,37.6-101.5,60.7c-78.5,0.4-142.5,16.8-165.9,47.9c-8,10.6-11.7,22.8-11,36.2c1.9,36.9,38.2,76.3,102.2,111.1 c30.9,16.8,67.1,30.8,104.9,40.9c24.5,70.8,55.8,130.8,89.5,172.5c40.5,50,81.3,75.3,115.2,71.4c13.3-1.5,25.2-8.2,35.4-19.9 c28.5-32.7,37.3-97.6,24.5-182.6c-1.5-9.9-3.3-20.1-5.4-30.6c31.2-21.5,59.2-45.8,82.7-72c59.9-19.7,108.9-44.4,140.7-70.9 c36.2-30.3,53.9-61.9,49.9-89.1C835.1,466.9,811.9,458.7,773.9,428.7z M583.3,144.4c8.1,0,14.7,2.3,19.5,6.8 c16.5,15.5,17.6,70.5-5.4,144.7c-15.3-32.1-32.7-61.7-51.9-87.8c-5.4-7.3-10.9-14.4-16.6-21.2c15.8-17.9,31.7-31.7,46.7-39.7 C578.1,145.3,580.7,144.4,583.3,144.4z M525.7,228.3c21.3,28.7,40.4,61.3,56.8,96.3c-17.6,7.3-36.1,14.9-55.2,22.8 c-19.1,7.9-38.4,15.1-57.6,21.7c-4.9-25.9-8.5-52.1-10.7-78.2c-2.2-26.1-2.9-51.5-2.2-75.8C477.4,195.5,501.1,196.5,525.7,228.3z M389.7,217.4c0.1,21.3,1.3,43.6,3.6,66.4c2.3,22.8,5.6,45.9,9.9,68.9c-23.8,6.3-47.1,13.2-69.5,20.8c-22.4,7.6-43.8,15.7-64,24.3 C301.2,330.1,342.1,268.9,389.7,217.4z M138.8,463.5c-0.4-7.2,1.8-13.4,6.5-19.5c15.8-21,67.8-35.1,134.6-36.9 c-25.6,21.7-48,45.3-66.8,70.5c-18.8,25.2-33.9,51.8-45.1,79.3C144.5,526.1,140.3,491.5,138.8,463.5z M222.3,544.4 c14.7-30.4,33.8-59.9,56.9-87.7c23.1-27.8,49.7-53.6,79.1-77.1c22.8-7.9,46.6-15.2,71-21.7c24.4-6.5,49.2-12.2,74.1-17 c18.1-4.2,36.2-7.8,54.1-10.8c-4.9,15.4-9,31.2-12.3,47.3c-3.3,16.1-5.8,32.4-7.5,48.8c-30.7,8.2-60.4,17.5-88.6,27.9 c-28.2,10.4-54.8,21.8-79.5,34.1c-24.7,12.3-47.4,25.5-67.8,39.5c-20.4,14-38.5,28.8-54.1,44.3 C239.1,564.1,230.5,554.4,222.3,544.4z M437.4,747.3c-6.1,7-12.4,11-18.9,11.9c-21.6,2.5-52.4-17.9-84.8-57.8 c-30.1-37.2-58.5-90.7-81.3-154.1c11.7-11.6,25.5-23,41.4-34.1c15.9-11.1,33.6-21.8,53-32c19.4-10.2,40.3-19.8,62.5-28.7 c22.2-8.9,45.6-17,70.1-24.2c1.2,5.6,2.2,11.2,3.1,16.8c0.9,5.6,1.6,11.2,2.2,16.8c-39.1,13.4-74.9,29.1-106.9,47 c-32,17.9-59.9,37.8-83.3,59.5c-23.4,21.7-42.2,45-56.1,69.6c-13.9,24.6-22.9,50.4-26.9,77.2c-0.9,5.9-1.5,11.7-1.8,17.5 c-0.3,5.8-0.3,11.5,0,17.1c-28.9-9.5-56.2-21.3-81.2-35.1c-25-13.8-47.2-29.2-66.2-45.9c14.8-25.4,33.5-49.5,56-72.1 c22.5-22.6,48.3-43.1,77.2-61.3c28.9-18.2,60.5-34.2,94.5-47.9c34-13.7,70.2-25.1,108.3-34.1c1.5,19.3,4.2,38.7,8.1,58 c3.9,19.3,8.9,38.4,15.1,57.1c-19.7,6.1-38.5,12.9-56.2,20.4c-17.7,7.5-34.3,15.6-49.6,24.3c-15.3,8.7-29.3,18-41.8,27.8 c-12.5,9.8-23.6,20.1-33.2,30.9c10.9,27.5,23.4,53,37.5,75.9c14.1,22.9,29.7,43.1,46.8,60.4c17.1,17.3,35.4,31.7,54.9,43 c19.5,11.3,40,19.5,61.3,24.4C467.1,823.1,459.1,772.1,437.4,747.3z M459.1,667.5c1.9,9.3,3.5,18.3,4.8,27 c1.3,8.7,2.3,17,3,24.9c-14.2-5.9-27.8-13.4-40.7-22.5c-12.9-9.1-25.1-19.8-36.5-32.1c-11.4-12.3-22-26.2-31.7-41.7 c-9.7-15.5-18.5-32.5-26.3-51c6.9-7.3,14.9-14.4,24-21.2c9.1-6.8,19.2-13.3,30.3-19.5c11.1-6.2,23.1-12,36-17.5 c12.9-5.5,26.6-10.5,41.2-15c7.1,17.2,15.3,34,24.6,50.3c9.3,16.3,19.7,31.9,31.2,46.7C495.1,621.1,476.5,644.9,459.1,667.5z M631.5,513.5c-20.1,22.7-44.1,44.1-71.7,63.8c-9.5-12.5-18.2-25.6-26.1-39.3c-7.9-13.7-15-27.9-21.2-42.6 c16.7-4.3,33.8-8.1,51.3-11.4c17.5-3.3,35.3-6,53.3-8.1C624.1,488.7,628.4,501.2,631.5,513.5z M638.9,455.1 c-21.1,2.4-42.1,5.6-62.9,9.5c-20.8,3.9-41.3,8.5-61.3,13.8c-1.5-13.5-2.4-27.1-2.7-40.8c-0.3-13.7,0-27.4,0.9-41 c0.9-13.6,2.4-27.1,4.5-40.4c2.1-13.3,4.8-26.4,8.1-39.2c17.1-6.1,34.3-11.6,51.6-16.5c17.3-4.9,34.6-9.1,51.9-12.6 c14.5,30.1,25.9,61.3,34.1,93.4c8.2,32.1,13.3,64.3,15.3,96.4C665.1,471.1,651.9,463.5,638.9,455.1z M773.9,511.9 c-28.5,23.8-73.1,46.2-128.5,64.4c-3.1-14.5-7.2-29.1-12.3-43.8c-5.1-14.7-11.2-29.3-18.3-43.8c27.1-2.1,53.8-2.9,79.9-2.4 c26.1,0.5,51.5,2.4,76,5.7c-1.5,1.2-3.1,2.4-4.8,3.6c-1.7,1.2-3.4,2.4-5.1,3.6c-5.1,3.3-7.9,8.8-8.4,16.5c-0.5,7.7,1.8,14.1,6.9,19.2 c5.1,5.1,11.5,7.5,19.2,7.2c7.7-0.3,14.1-3.3,19.2-9c5.1-5.7,7.5-12.3,7.2-19.8c-0.3-7.5-3.3-13.8-9-18.9c-1.5-1.2-3-2.4-4.5-3.6 c-1.5-1.2-3.1-2.3-4.8-3.3c22.5,3.9,42.9,8.7,61.3,14.4c18.4,5.7,34.6,12.2,48.6,19.5C807.8,480.1,794.2,495,773.9,511.9z M818.1,465.9c-16.5-8.4-35.8-16.2-57.8-23.4c-22-7.2-46.5-13.5-73.5-18.9c-1.5-28.3-5.9-56.6-13.2-84.9 c-7.3-28.3-17.4-56.1-30.3-83.4c26.5-11.1,51.9-18.3,75.9-21.6c24-3.3,45.3-2.1,63.8,3.6c18.5,5.7,33.7,15.6,45.6,29.7 c11.9,14.1,19.8,31.6,23.7,52.5c0.9,5.1,1.5,10.2,1.8,15.3c0.3,5.1,0.3,10.2,0,15.3c-0.9,15.9-4.5,31.3-10.8,46.2 C836.9,411.3,828.4,437.9,818.1,465.9z"
                  fill="#3b82f6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
