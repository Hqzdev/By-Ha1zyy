"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function Header() {
  const [activeTab, setActiveTab] = useState("")
  const [hoverPosition, setHoverPosition] = useState({ left: 0, width: 0 })
  const navRef = useRef<HTMLDivElement>(null)

  const updateIndicatorPosition = (id: string) => {
    const activeLink = navRef.current?.querySelector(`[href="#${id}"]`) as HTMLElement
    if (activeLink) {
      const rect = activeLink.getBoundingClientRect()
      const navRect = navRef.current?.getBoundingClientRect()
      
      if (navRect) {
        setHoverPosition({
          left: rect.left - navRect.left,
          width: rect.width,
        })
      }
    }
  }

  // Function to handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setActiveTab(id)
    updateIndicatorPosition(id)
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id)
            updateIndicatorPosition(entry.target.id)
          }
        })
      },
      { threshold: 0.2, rootMargin: "-80px 0px 0px 0px" }
    )

    const sections = document.querySelectorAll("#skills, #projects, #about, #contact")
    sections.forEach((section) => observer.observe(section))

    // Initialize position for active tab
    if (activeTab) {
      updateIndicatorPosition(activeTab)
    }

    return () => observer.disconnect()
  }, [activeTab])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-white/50 py-3 backdrop-blur-md">
      <div className="flex h-[48px] items-center gap-3">
        <div className="flex items-center rounded-full bg-gray-100/90 p-1 backdrop-blur-sm">
          <Link href="/" className="flex items-center px-3">
            <span className="text-xl font-bold text-blue-600">.HT</span>
          </Link>
          <nav 
            className="relative flex gap-1" 
            ref={navRef}
          >
            {/* Floating Background Indicator */}
            <div
              className="absolute left-0 top-0 rounded-full bg-blue-600 transition-all duration-300 ease-out"
              style={{
                transform: `translateX(${hoverPosition.left}px)`,
                width: `${hoverPosition.width}px`,
                height: '100%',
                opacity: 0.8,
              }}
            />
            
            <Link
              href="#skills"
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                activeTab === "skills" ? "text-white" : "text-gray-500"
              }`}
              onClick={(e) => scrollToSection(e, "skills")}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                activeTab === "projects" ? "text-white" : "text-gray-500"
              }`}
              onClick={(e) => scrollToSection(e, "projects")}
            >
              Projects
            </Link>
            <Link
              href="#about"
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                activeTab === "about" ? "text-white" : "text-gray-500"
              }`}
              onClick={(e) => scrollToSection(e, "about")}
            >
              About
            </Link>
            <Link
              href="#contact"
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                activeTab === "contact" ? "text-white" : "text-gray-500"
              }`}
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Contact
            </Link>
          </nav>
        </div>

        <Link
          href="https://github.com/Hqzdev/By-Ha1zyy"
          className="hidden sm:flex items-center rounded-full bg-gray-100/90 px-4 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-200/90 transition-colors duration-300 border-2 border-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
      </div>
    </header>
  )
}
