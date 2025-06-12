import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Clock } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Personal AI ChatBot",
      description:
        "Built a personal AI chatbot using Streamlit and Google APIs to answer personal questions and automate daily queries.",
      technologies: ["Python", "Google API", "Streamlit"],
      github: "https://github.com/Rk-Engineer/Personal-AI-ChatBot",
      status: "completed",
    },
    {
      title: "Age Detection Project",
      description: "A real-time age detection and gender Detection system built with Java and OpenCV using live camera inputs and Algorithms.",
      technologies: ["Java", "OpenCV", "Maven"],
      github: "https://github.com/Rk-Engineer/Personal-AI-ChatBot",
      status: "completed",
    },
    {
      title: "Student Management System",
      description: "A full backend system to manage student data, courses, and grades.",
      technologies: ["Java", "Spring Boot", "H2 Database"],
      status: "completed",
    },
    {
      title: "Patch Intelligence",
      description: "An intelligent patch management system that automates software patch updates.",
      technologies: ["Python", "Neo4j" , "CQL", "NVD APIs" ,"BeautifulSoup"],
      status: "completed",
    },
    {
      title: "Smart Clipboard AI Assistant",
      description:
        "A system where copied text from the laptop can be accessed on the mobile and integrated with AI assistant for real-time answers.",
      technologies: ["HTML" ,"CSS" ,"Javascript" ,"Open AI API's"],
      status: "in-progress",
    },
    {
      title: "YouTube Clone Landing Page",
      description: "Developed a landing page similar to YouTube during internship training at HCL Technologies.",
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "completed",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects and development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  {project.status === "in-progress" && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      In Progress
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  <Button size="sm" variant="ghost">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
