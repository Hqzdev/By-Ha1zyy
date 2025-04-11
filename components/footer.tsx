"use client"

import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

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


        </div>
      </div>
    </footer>
  )
}
