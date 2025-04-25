"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github } from "lucide-react"

const projects = [
  {
    id: "student-portal",
    title: "STUDENT PORTAL",
    description:
      "A comprehensive student portal for KIET Group of Institutions with modules for academics, hostel allocation, and more.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React.js", "Next.js", "Django", "MySQL"],
    github: "#",
    demo: "https://tech.kiet.edu/StudentPortal/#/dashboard",
  },
  {
    id: "headquarters",
    title: "HEADQUARTERS",
    description: "A party management system with features for party requests, reimbursements, and leave management.",
    image: "/placeholder1.svg?height=400&width=600",
    tags: ["React.js", "Django", "Python", "MySQL"],
    github: "#",
    demo: "https://headquarters-pms.vercel.app/"
  },
  {
    id: "ecobuild",
    title: "ECOBUILD",
    description:
      "A centralized online tool for sustainable construction techniques that reduced project planning time by 30%.",
    image: "/placeholder2.svg?height=400&width=600",
    tags: ["React.js", "Tailwind CSS", "JavaScript"],
    github: "#",
    demo: "https://github.com/ananyajain386/HBM",
  },
]

export default function ProjectShowcase() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} variants={itemVariants} index={index} />
      ))}
    </motion.div>
  )
}

function ProjectCard({ project, variants, index }) {
  return (
    <motion.div variants={variants} className="h-full">
      <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 border-none bg-card/50 backdrop-blur-sm">
        <div className="relative overflow-hidden h-48">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="pb-2 flex-grow">
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-2">
          {/* <Button variant="outline" size="sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button> */}
          <Button size="sm" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
