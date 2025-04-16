"use client"

import React from "react"
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"


interface SocialLink {
  href: string
  icon: JSX.Element
  label: string
}

export default function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/Hqzdev",
      icon: <AiFillGithub className="w-8 h-8" />,
      label: "GitHub"
    },
    {
      href: "https://x.com/ha1zyy38089?s=21",
      icon: <AiOutlineTwitter className="w-8 h-8" />,
      label: "Twitter"
    },
    {
      href: "https://www.instagram.com/ha1zdev?igsh=MXJpMzJ5ZTNuMng1bw%3D%3D&utm_source=qr",
      icon: <AiFillInstagram className="w-8 h-8" />,
      label: "Instagram"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">FIND ME <span className="text-blue-600">ON</span></h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 px-4">
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
          </div>
        ))}
      </div>
    </section>
  )
} 