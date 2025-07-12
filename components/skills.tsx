import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Globe, Brain, Wrench, Users, BookOpen } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "C", "Python","HTML" , "CSS", "JavaScript", "SQL"],
      color: "text-blue-500",
    },
    {
      title: "Frontend Technologies",
      icon: Globe,
      skills: [ "HTML", "CSS", "JavaScript", "TailwindCSS", "Vite", "Parcel" , "React" , "Streamlit"],
      color: "text-purple-500",
    },
    {
      title: "Backend Technologies",
      icon: Database,
      skills: ["NodeJS" , "ExpressJS", "Spring Boot", "REST APIs", "Maven" , "Fast API" ],
      color: "text-green-500",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB" ,"MySQL", "H2" ,  "Neo4j"],
      color: "text-orange-500",
    },
    
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub" , "Linux" , "VS Code" , "Firebase" , "Postman" , "IntelliJ" , "ServiceNow"],
      color: "text-indigo-500",
    },
    {
      title: "AI / ML",
      icon: Brain,
      skills: ["OpenCV"],
      color: "text-red-500",
    },
  ]

  const softSkills = [
    { name: "Problem Solving", level: 85 },
    { name: "Team Collaboration", level: 80 },
    { name: "Communication", level: 75 },
    { name: "Leadership", level: 85 },
  ]

  const currentLearning = ["Data Structures & Algorithms (DSA)", "Aptitude Preparation for Campus Placement"]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical skills and areas of expertise in software development
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-blue-500" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-green-500" />
                Currently Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentLearning.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
