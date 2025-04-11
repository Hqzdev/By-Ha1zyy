"use client"

import React from "react"
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

interface SocialLink {
  href: string
  icon: JSX.Element
  label: string
}

export default function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/Ha1zyy",
      icon: <AiFillGithub className="w-6 h-6" />,
      label: "GitHub"
    },
    {
      href: "https://twitter.com/Ha1zyy",
      icon: <AiOutlineTwitter className="w-6 h-6" />,
      label: "Twitter"
    },
    {
      href: "https://www.linkedin.com/in/ha1zyy/",
      icon: <FaLinkedinIn className="w-6 h-6" />,
      label: "LinkedIn"
    },
    {
      href: "https://www.instagram.com/ha1zyy",
      icon: <AiFillInstagram className="w-6 h-6" />,
      label: "Instagram"
    }
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">FIND ME ON</h2>
        <p className="mb-6 text-gray-400">
          Feel free to <span className="text-blue-600">connect</span> with me
        </p>
        <ul className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <li key={index} className="transform transition-transform hover:scale-110">
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
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
  )
} 