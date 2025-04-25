"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Code, Trophy, Smile } from "lucide-react"

type CounterProps = {
  label: string
  value: number
  icon: string
  delay?: number
}

export default function AnimatedCounter({ label, value, icon, delay = 0 }: CounterProps) {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay,
        },
      })

      const start = 0
      const end = value
      const duration = 2000
      const startTime = Date.now()

      const timer = setInterval(() => {
        const now = Date.now()
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)

        setCount(Math.floor(progress * end))

        if (progress === 1) {
          clearInterval(timer)
        }
      }, 50)

      return () => clearInterval(timer)
    }
  }, [controls, inView, value, delay])

  const renderIcon = () => {
    switch (icon) {
      case "calendar":
        return <Calendar className="h-6 w-6" />
      case "code":
        return <Code className="h-6 w-6" />
      case "trophy":
        return <Trophy className="h-6 w-6" />
      case "smile":
        return <Smile className="h-6 w-6" />
      default:
        return <Code className="h-6 w-6" />
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="bg-rose-100 dark:bg-rose-950/30 p-4 rounded-full text-rose-600 mb-4">{renderIcon()}</div>
      <h3 className="text-4xl font-bold mb-2">{count}+</h3>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  )
}
