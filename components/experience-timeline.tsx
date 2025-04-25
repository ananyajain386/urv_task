"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    year: "2024",
    title: "Full Stack Developer",
    company: "Team ERP",
    description: "Maintained modules for a student-driven ERP system using React JS, Django, Next.js",
    type: "Internship",
  },
  {
    year: "2023",
    title: "IEEE Hackathon Coordinator",
    company: "KIET Group of Institutions",
    description: "Managed IEEE hackathon, participant mentorship and event coordination",
    type: "Volunteer",
  },
  {
    year: "2023",
    title: "Core Coordinator",
    company: "Epoque'23",
    description: "Organized and coordinated college cultural festival activities",
    type: "Extra-curricular",
  },
  {
    year: "2022",
    title: "Basketball State Championship",
    company: "State Sports Association",
    description: "Won gold medal in state level basketball championship",
    type: "Achievement",
  },
  {
    year: "2022",
    title: "Started B.Tech in CSE",
    company: "KIET Group of Institutions",
    description: "Began undergraduate studies in Computer Science & Engineering",
    type: "Education",
  },
]

export default function ExperienceTimeline() {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-muted transform md:-translate-x-1/2"></div>

      <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
              <div
                className={`order-2 md:order-${index % 2 === 0 ? "1" : "3"} md:w-[45%] flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
              >
                <Card className="w-full md:max-w-md border-t-4 border-t-rose-600 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <Badge variant="outline">{experience.type}</Badge>
                    </div>
                    <p className="mt-2">{experience.description}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="order-1 md:order-2 z-10 flex items-center">
                <div className="h-8 w-8 rounded-full bg-rose-600 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              <div
                className={`order-3 md:order-${index % 2 === 0 ? "3" : "1"} md:w-[45%] flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                <div className="md:text-center md:w-32">
                  <div className="inline-block bg-muted/50 backdrop-blur-sm px-4 py-2 rounded-full font-semibold">
                    {experience.year}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
