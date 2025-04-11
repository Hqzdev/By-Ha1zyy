"use client"

import React from "react"
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

interface SocialLink {
  href: string
  icon: JSX.Element
  label: string
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/Ha1zyy",
      icon: <AiFillGithub className="w-5 h-5" />,
      label: "GitHub"
    },
    {
      href: "https://twitter.com/Ha1zyy",
      icon: <AiOutlineTwitter className="w-5 h-5" />,
      label: "Twitter"
    },
    {
      href: "https://www.linkedin.com/in/ha1zyy/",
      icon: <FaLinkedinIn className="w-5 h-5" />,
      label: "LinkedIn"
    },
    {
      href: "https://www.instagram.com/ha1zyy",
      icon: <AiFillInstagram className="w-5 h-5" />,
      label: "Instagram"
    }
  ]

  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-sm text-gray-900">
              Designed and Developed by Ha1zyy
            </h3>
          </div>
          
          <div className="text-center">
            <h3 className="text-sm text-gray-900">
              Copyright © {currentYear} HT
            </h3>
          </div>

          <div className="flex justify-center md:justify-end">
            <ul className="flex gap-4">
              {socialLinks.map((link, index) => (
                <li key={index} className="transform transition-transform hover:scale-110">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-blue-600 transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
