"use client"

import type React from "react"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  // Function to handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header height
        behavior: "smooth",
      })
    }
  }

  return (
    <footer id="contact" className="bg-gray-50/80 backdrop-blur-sm border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              I'm currently available for freelance work and full-time positions. If you have a project that needs some
              creative work, feel free to contact me.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="LumiaSupport@lumia.com"
                className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://github.com/Hqzdev"
                className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              <Link
                href="#skills"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={(e) => scrollToSection(e, "skills")}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={(e) => scrollToSection(e, "projects")}
              >
                Projects
              </Link>
              <Link
                href="#roadmap"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={(e) => scrollToSection(e, "roadmap")}
              >
                Roadmap
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={(e) => scrollToSection(e, "contact")}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
