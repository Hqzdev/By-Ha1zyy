import Header from "@/components/header"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Footer from "@/components/footer"
import SocialLinks from "@/components/social-links"
import About from "@/components/boutme"
import FloatingElements from "@/components/floating-elements"
import AnimatedGradient from "@/components/animated-gradient"

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <AnimatedGradient />
      <FloatingElements />
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8 space-y-20">
        <Skills />
        <Projects />
        <About />
        <div id="contact">
          <SocialLinks />
        </div>
      </div>
      <Footer />
    </div>
  )
}
