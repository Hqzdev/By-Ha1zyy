"use client"

import { useEffect, useState } from "react"

export default function About() {
  return (
    <section id="about" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">
          LET ME <span className="text-blue-600">INTRODUCE</span> MYSELF
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg">
          <p className="leading-relaxed text-gray-900">
            I fell in love with programming and have been on an exciting journey of continuous learning and growth. 🚀
          </p>

          <p className="leading-relaxed text-gray-900">
            I am proficient in modern technologies like{" "}
            <span className="text-blue-600 font-semibold">Python, Node.js, and React.js</span>.
          </p>

          <p className="leading-relaxed text-gray-900">
            My primary focus is on developing innovative{" "}
            <span className="text-blue-600 font-semibold">AI Technologies and Products</span>,
            with particular emphasis on{" "}
            <span className="text-blue-600 font-semibold">Machine Learning</span> applications.
          </p>

          <p className="leading-relaxed text-gray-900">
            I'm passionate about creating impactful solutions using{" "}
            <span className="text-blue-600 font-semibold">Python and Modern JavaScript Libraries</span>{" "}
            including <span className="text-blue-600 font-semibold">React.js and Next.js</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
