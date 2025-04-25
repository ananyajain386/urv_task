import { Card, CardContent } from "@/components/ui/card"
import { Trophy, GraduationCap, Briefcase, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import ExperienceTimeline from "@/components/experience-timeline"

export default function AboutPage() {
  return (
    <main className="container py-12 max-w-5xl mx-auto">
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-600/10 to-transparent rounded-lg"></div>
        <div className="relative p-8 md:p-12">
          <Badge variant="outline" className="px-4 py-1 text-sm font-medium mb-4">
            About Me
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Journey</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Get to know more about me, my background, and what drives me as a developer.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-6">My Story</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg">
              My journey into frontend development began during my first year of college at KIET Group of Institutions.
              I was always fascinated by how websites worked, but I never thought I'd be the one building them.
            </p>
            <p className="text-lg">
              It all started when I joined a college hackathon without any real coding experience. My team needed
              someone to work on the frontend, and I volunteered despite having no idea what I was doing. I spent the
              entire night learning HTML and CSS from scratch, fueled by curiosity and lots of coffee.
            </p>
            <p className="text-lg">
              To everyone's surprise (especially mine), our project won third place! That moment of seeing something I
              built come to life on screen was magical. From that day forward, I was hooked on web development.
            </p>
            <p className="text-lg">
              As I progressed, I discovered my love for React and Next.js, which allowed me to create more dynamic and
              interactive experiences. My background in basketball taught me the importance of teamwork and
              perseverance, which I bring to every development project.
            </p>
            <p className="text-lg">
              Today, I'm passionate about creating intuitive interfaces that solve real problems. Every line of code I
              write is another step in this exciting journey.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="relative h-64 w-full">
            <HandDrawnSketch />
          </div>
          <Card className="border-t-4 border-t-rose-600">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-rose-600" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div className="h-full w-0.5 bg-muted mt-2"></div>
                  </div>
                  <div>
                    <p className="font-medium text-lg">B.Tech. - Computer Science & Engineering</p>
                    <p className="text-muted-foreground">KIET Group of Institutions, Ghaziabad (AKTU)</p>
                    <p className="text-sm text-muted-foreground">2022 - Present | 82.90%</p>
                    <Badge variant="secondary" className="mt-2">
                      Current
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div className="h-full w-0.5 bg-muted mt-2"></div>
                  </div>
                  <div>
                    <p className="font-medium text-lg">Senior Secondary</p>
                    <p className="text-muted-foreground">Ch. Baldev Singh Model School (CBSE)</p>
                    <p className="text-sm text-muted-foreground">2019 - 2020 | 84.2%</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-lg">Secondary</p>
                    <p className="text-muted-foreground">Sophia Girls Sen. Sec School (CBSE)</p>
                    <p className="text-sm text-muted-foreground">2017 - 2018 | 93.6%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <Badge variant="outline" className="px-4 py-1 text-sm font-medium mb-4">
            Professional Journey
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Experience & Timeline</h2>
          <p className="text-muted-foreground text-lg">
            A chronological view of my professional journey and key milestones.
          </p>
        </div>

        <ExperienceTimeline />
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="border-t-4 border-t-rose-600">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-rose-600" />
              Achievements
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Academic Excellence</h4>
                  <p className="text-muted-foreground">Felicitated among high-scorers of freshman year at college</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">State Level Gold Championship</h4>
                  <p className="text-muted-foreground">Won State Level Gold Championship in Basketball</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">National Selection</h4>
                  <p className="text-muted-foreground">Selected for Nationals from North Zone in Basketball</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-rose-600">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Briefcase className="h-5 w-5 mr-2 text-rose-600" />
              Work Experience
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-medium text-lg">Full Stack Developer at Team ERP</h4>
                  <Badge>Internship</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Apr 2024 - Nov 2024</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-600 mt-2" />
                    <span>Maintained modules for a student-driven ERP system using React JS, Django, Next.js</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-600 mt-2" />
                    <span>
                      Collaborated with a team of developers to design, implement, and deploy web-based solutions for
                      over 7k+ students and 1k+ employees
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-600 mt-2" />
                    <span>
                      Gained hands-on experience managing Linux server for application hosting and working on live
                      database servers
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-lg mb-2">IEEE Hackathon</h4>
                <p className="text-muted-foreground">
                  Managed IEEE hackathon, participant mentorship and event coordination
                </p>
              </div>

              <div>
                <h4 className="font-medium text-lg mb-2">Epoque'23 (Extra-curricular)</h4>
                <p className="text-muted-foreground">Core Coordinator - Organizing Team</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mb-8">
        <Badge variant="outline" className="px-4 py-1 text-sm font-medium mb-4">
          Personal Philosophy
        </Badge>
        <h2 className="text-3xl font-bold mb-4">My Approach to Development</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          I believe in creating clean, efficient, and user-focused applications that solve real problems.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <Card className="hover:shadow-md transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="h-16 w-16 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-lightbulb"
              >
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
            <p className="text-muted-foreground">
              I approach each project as a puzzle to solve, focusing on finding elegant solutions to complex problems.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="h-16 w-16 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Team Player</h3>
            <p className="text-muted-foreground">
              My experience in basketball taught me the value of teamwork, communication, and working together toward a
              common goal.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="h-16 w-16 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-rocket"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Continuous Learner</h3>
            <p className="text-muted-foreground">
              I'm constantly exploring new technologies and techniques to improve my skills and stay ahead in this
              rapidly evolving field.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

function HandDrawnSketch() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Computer/Laptop */}
      <path
        d="M100,200 L300,200 L320,250 L80,250 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw"
        style={{ animationDelay: "0s", animationDuration: "2s" }}
      />
      <path
        d="M120,120 L280,120 L280,200 L120,200 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw"
        style={{ animationDelay: "0.5s", animationDuration: "2s" }}
      />

      {/* Code on screen */}
      <path
        d="M140,140 L170,140 M140,150 L190,150 M140,160 L160,160"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-draw"
        style={{ animationDelay: "1s", animationDuration: "1.5s" }}
      />
      <path
        d="M200,140 L240,140 M200,150 L230,150 M200,160 L250,160 M200,170 L220,170"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-draw"
        style={{ animationDelay: "1.5s", animationDuration: "1.5s" }}
      />

      {/* Basketball */}
      <circle
        cx="330"
        cy="150"
        r="25"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="animate-draw text-rose-600"
        style={{ animationDelay: "2s", animationDuration: "1s" }}
      />
      <path
        d="M330,125 L330,175 M305,150 L355,150"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="animate-draw text-rose-600"
        style={{ animationDelay: "2.5s", animationDuration: "1s" }}
      />
      <path
        d="M315,135 C320,140 340,140 345,135 M315,165 C320,160 340,160 345,165"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="animate-draw text-rose-600"
        style={{ animationDelay: "3s", animationDuration: "1s" }}
      />

      {/* Coffee cup */}
      <path
        d="M70,170 L90,170 L95,140 L65,140 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw"
        style={{ animationDelay: "3.5s", animationDuration: "1s" }}
      />
      <path
        d="M95,150 C105,150 105,160 95,160"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        className="animate-draw"
        style={{ animationDelay: "4s", animationDuration: "0.5s" }}
      />
      <path
        d="M70,145 C75,135 85,135 90,145"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        className="animate-draw"
        style={{ animationDelay: "4.2s", animationDuration: "0.5s" }}
      />

      {/* Text */}
      <text x="200" y="280" textAnchor="middle" className="text-sm font-medium fill-current">
        My Journey to Frontend Development
      </text>
    </svg>
  )
}
