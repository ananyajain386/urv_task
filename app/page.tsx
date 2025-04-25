import Link from "next/link"
import { ArrowRight, Code, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import BasketballInteraction from "@/components/basketball-interaction"
import SkillsShowcase from "@/components/skills-showcase"
import AnimatedCounter from "@/components/animated-counter"
import ProjectShowcase from "@/components/project-showcase"
import ContactSection from "@/components/contact-section"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section - Keeping original from v1 */}
      <section className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24 px-6 md:px-12 lg:px-24 gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-rose-600">Ananya Jain</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Full Stack Developer passionate about creating intuitive and efficient web applications. I get excited about
            solving complex problems with clean, elegant code.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/about">
                About Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/projects">
                View Projects <Code className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/ananyajain386" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/ananyajain386" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <BasketballInteraction />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter label="Years Experience" value={2} icon="calendar" delay={0} />
            <AnimatedCounter label="Projects Completed" value={6} icon="code" delay={0.1} />
            <AnimatedCounter label="Basketball Achievements" value={3} icon="trophy" delay={0.2} />
            <AnimatedCounter label="Happy Clients" value={10} icon="smile" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Skills Section with Animation */}
      <section className="py-20 relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="outline" className="px-4 py-1 text-sm font-medium mb-4">
              My Expertise
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Technical Skills</h2>
            <p className="text-muted-foreground text-lg">
              I've worked with a variety of technologies and frameworks to build responsive and efficient web
              applications. Here's a showcase of my technical expertise.
            </p>
          </div>

          <SkillsShowcase />
        </div>
      </section>

      {/* Featured Projects Preview with Animation */}
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 dark:to-background/50 z-0"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="outline" className="px-4 py-1 text-sm font-medium mb-4">
              My Work
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">
              Here are some of the projects I've worked on. Each project represents a unique challenge and showcases
              different aspects of my skills and expertise.
            </p>
          </div>

          <ProjectShowcase />

          <div className="flex justify-center mt-16">
            <Button size="lg" asChild>
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-rose-950/10 dark:to-rose-900/20 z-0"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="outline" className="px-4 py-1 text-sm font-medium mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </div>

          <ContactSection />
        </div>
      </section>
    </main>
  )
}
