import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Target, Heart } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, passion, and aspirations in software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Hello, I'm Ramkumar.B</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am currently pursuing B.E. in Computer Science and Technology at Sathyabama Institute of Science and
              Engineering. I am passionate about software development and building scalable applications.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My primary interests lie in full stack development, backend engineering, and AI-powered solutions. I enjoy
              learning new technologies, participating in technical events, and developing both academic and personal
              projects.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h4 className="text-lg font-semibold">Education</h4>
                </div>
                <p className="text-muted-foreground">
                  B.E. Computer Science and Technology
                  <br />
                  Sathyabama Institute of Science and Technology
                  <br />
                  Final Year Student
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Target className="h-6 w-6 text-blue-500 mr-3" />
                  <h4 className="text-lg font-semibold">Career Goal</h4>
                </div>
                <p className="text-muted-foreground">
                  To become a proficient Software Engineer contributing to innovative projects in the software industry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Heart className="h-6 w-6 text-green-500 mr-3" />
                  <h4 className="text-lg font-semibold">Passion</h4>
                </div>
                <p className="text-muted-foreground">
                  Building software that solves real-world problems and exploring cutting-edge technologies like AI and
                  machine learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
