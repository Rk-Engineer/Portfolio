import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Intern",
      company: "HCL Technologies",
      duration: "July 2024 - October 2024",
      description: "Completed internship training focusing on practical software development projects.",
      projects: ["Age Detection Project using Java and OpenCV", "YouTube Clone Landing Page development"],
      technologies: ["Java", "OpenCV", "HTML", "CSS", "JavaScript"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and internship experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <Card key={index} className="mb-8 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Building className="h-6 w-6 text-primary" />
                      {experience.title} - {experience.company}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-2">
                      <Calendar className="h-4 w-4" />
                      {experience.duration}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Projects:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {experience.projects.map((project, projectIndex) => (
                      <li key={projectIndex}>{project}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
