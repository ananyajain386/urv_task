"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Database, Layout, Server, Layers, GitBranch, Palette, Cpu } from "lucide-react"

const skills = {
  frontend: [
    { name: "React.js", level: 90, icon: <Code2 className="h-5 w-5" /> },
    { name: "Next.js", level: 85, icon: <Layout className="h-5 w-5" /> },
    { name: "JavaScript", level: 92, icon: <Code2 className="h-5 w-5" /> },
    { name: "Tailwind CSS", level: 88, icon: <Palette className="h-5 w-5" /> },
  ],
  // backend: [
  //   { name: "Django", level: 80, icon: <Server className="h-5 w-5" /> },
  //   { name: "Python", level: 85, icon: <Code2 className="h-5 w-5" /> },
  //   { name: "MySQL", level: 75, icon: <Database className="h-5 w-5" /> },
  //   { name: "RESTful APIs", level: 82, icon: <Layers className="h-5 w-5" /> },
  // ],
  // tools: [
  //   { name: "Git", level: 88, icon: <GitBranch className="h-5 w-5" /> },
  //   { name: "GitHub", level: 90, icon: <GitBranch className="h-5 w-5" /> },
  //   { name: "VS Code", level: 95, icon: <Code2 className="h-5 w-5" /> },
  //   { name: "Linux", level: 70, icon: <Cpu className="h-5 w-5" /> },
  // ],
}

export default function SkillsShowcase() {
  const [activeTab, setActiveTab] = useState("frontend")
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
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab} className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          {/* <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger> */}
        </TabsList>
      </div>

      {Object.entries(skills).map(([category, categorySkills]) => (
        <TabsContent key={category} value={category} className="mt-0">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categorySkills.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

function SkillCard({ skill }) {
  return (
    <Card className="overflow-hidden h-full hover:shadow-md transition-all duration-300 border-t-4 border-t-rose-600">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-rose-100 dark:bg-rose-950/30 p-2 rounded-md text-rose-600">{skill.icon}</div>
          <h3 className="font-semibold text-lg">{skill.name}</h3>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Proficiency</span>
            <span className="font-medium">{skill.level}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2.5">
            <motion.div
              className="bg-rose-600 h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
