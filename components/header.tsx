"use client"

import type React from "react"


import Link from "next/link"

export default function Header() {
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
    <header className="sticky top-0 z-50 mx-auto rounded-2xl mt-3 items-center justify-center backdrop-blur-sm w-[400px]">
      <div className="container flex h-16 items-center justify-center px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl mr-10 font-bold text-blue-600">.HT</span>
        </Link>
        <nav className="flex gap-6 text-lg">
          <Link
            href="#skills"
            className="text-sm font-medium text-gray-900 relative after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:rounded-full after:bg-blue-600 after:transition-all after:duration-500 hover:text-blue-600 hover:after:w-full"
            onClick={(e) => scrollToSection(e, "skills")}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium text-gray-900 relative after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:rounded-full after:bg-blue-600 after:transition-all after:duration-500 hover:text-blue-600 hover:after:w-full"
            onClick={(e) => scrollToSection(e, "projects")}
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-gray-900 relative after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:rounded-full after:bg-blue-600 after:transition-all after:duration-500 hover:text-blue-600 hover:after:w-full"
            onClick={(e) => scrollToSection(e, "about")}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-gray-900 relative after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:rounded-full after:bg-blue-600 after:transition-all after:duration-500 hover:text-blue-600 hover:after:w-full"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Contact
          </Link>
          <Link
            href="https://github.com/Hqzdev/By-Ha1zyy"
            className="text-sm font-medium text-gray-900 relative after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:rounded-full after:bg-blue-600 after:transition-all after:duration-500 hover:text-blue-600 hover:after:w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  )
}
