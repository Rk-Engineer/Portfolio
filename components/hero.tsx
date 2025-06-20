"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Ramkumar.B
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Aspiring Software Developer | MERN Stack Enthusiast | Java & Spring Boot Developer | AI & Projects
              Explorer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about building software that solves real-world problems. Exploring AI, Fullstack Development,
              and always learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={() => scrollToSection("#projects")} className="bg-primary hover:bg-primary/90">
                View Projects
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("#contact")}>
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="https://ik.imagekit.io/RkEngineer/Portfolio/placeholder.jpg?height=320&width=320"
                  alt="Ram Kumar"
                  width={320}
                  height={320}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full">
                <a href="https://github.com/Rk-Engineer" target="_blank" rel="noopener noreferrer"><Github  className="h-6 w-6" /></a>
                
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button variant="ghost" onClick={() => scrollToSection("#about")} className="animate-bounce">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
