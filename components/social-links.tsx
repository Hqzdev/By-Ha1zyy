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
      icon: <AiFillGithub className="w-8 h-8" />,
      label: "GitHub"
    },
    {
      href: "https://twitter.com/Ha1zyy",
      icon: <AiOutlineTwitter className="w-8 h-8" />,
      label: "Twitter"
    },
    {
      href: "https://www.linkedin.com/in/ha1zyy/",
      icon: <FaLinkedinIn className="w-8 h-8" />,
      label: "LinkedIn"
    },
    {
      href: "https://www.instagram.com/ha1zyy",
      icon: <AiFillInstagram className="w-8 h-8" />,
      label: "Instagram"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">FIND ME <span className="text-blue-600">ON</span></h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Feel free to <span className="text-blue-600 font-semibold">connect</span> with me
        </p>
      </div>
      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 px-4">
        {socialLinks.map((link, idx) => (
          <div
            key={link.label}
            className="flex flex-col items-center bg-white border-2 border-blue-200 rounded-3xl shadow-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
          >
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 border border-blue-200 text-blue-700 mb-4 shadow group-hover:bg-blue-200 transition"
            >
              {link.icon}
            </a>
            <span className="text-lg font-semibold text-blue-700 mb-1">{link.label}</span>
            <span className="text-xs text-gray-500 break-all">{link.href.replace('https://', '')}</span>
          </div>
        ))}
      </div>
    </section>
  )
} 