"use client"

import type React from "react"

import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

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
    <header className="sticky top-0 z-50 mx-auto border-2 border-gray-200 rounded-2xl mt-3 items-center justify-center bg-white/80 backdrop-blur-sm w-[400px]">
      <div className="container flex h-16 items-center justify-center px-4 ">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl mr-10 font-bold text-blue-600 hover:scale-105 transition-transform">.HT</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-lg">
          <Link
            href="#skills"
            className="text-sm font-medium hover:text-blue-600 transition-colors hover:scale-105 transition-transform"
            onClick={(e) => scrollToSection(e, "skills")}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:text-blue-600 transition-colors hover:scale-105 transition-transform"
            onClick={(e) => scrollToSection(e, "projects")}
          >
            Projects
          </Link>
          <Link
            href="#roadmap"
            className="text-sm font-medium hover:text-blue-600 transition-colors hover:scale-105 transition-transform"
            onClick={(e) => scrollToSection(e, "roadmap")}
          >
            Roadmap
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-blue-600 transition-colors hover:scale-105 transition-transform"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Contact
          </Link>
        </nav>
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="#skills"
                  className="text-sm font-medium hover:text-blue-600 transition-colors"
                  onClick={(e) => {
                    scrollToSection(e, "skills")
                    const closestButton = document.querySelector('[data-state="open"]') as HTMLElement
                    if (closestButton) closestButton.click()
                  }}
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  className="text-sm font-medium hover:text-blue-600 transition-colors"
                  onClick={(e) => {
                    scrollToSection(e, "projects")
                    const closestButton = document.querySelector('[data-state="open"]') as HTMLElement
                    if (closestButton) closestButton.click()
                  }}
                >
                  Projects
                </Link>
                <Link
                  href="#roadmap"
                  className="text-sm font-medium hover:text-blue-600 transition-colors"
                  onClick={(e) => {
                    scrollToSection(e, "roadmap")
                    const closestButton = document.querySelector('[data-state="open"]') as HTMLElement
                    if (closestButton) closestButton.click()
                  }}
                >
                  Roadmap
                </Link>
                <Link
                  href="#contact"
                  className="text-sm font-medium hover:text-blue-600 transition-colors"
                  onClick={(e) => {
                    scrollToSection(e, "contact")
                    const closestButton = document.querySelector('[data-state="open"]') as HTMLElement
                    if (closestButton) closestButton.click()
                  }}
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
