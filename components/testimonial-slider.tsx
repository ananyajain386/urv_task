"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Dr. Sanjay Sharma",
    role: "Professor, KIET Group of Institutions",
    content:
      "Ananya is one of the most dedicated students I've had the pleasure to teach. Her work on the Student Portal project demonstrated exceptional technical skills and a deep understanding of user needs.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Rahul Gupta",
    role: "Team Lead, ERP Internship",
    content:
      "During her internship, Ananya quickly became an invaluable team member. Her ability to learn new technologies and implement them effectively was impressive. She consistently delivered high-quality code on time.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Priya Verma",
    role: "IEEE Hackathon Organizer",
    content:
      "Ananya's contribution to organizing the IEEE Hackathon was outstanding. She not only managed the technical aspects flawlessly but also provided excellent mentorship to participants.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, current])

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-12 w-12 bg-background/80 backdrop-blur-sm shadow-md hover:bg-background"
          onClick={prev}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous</span>
        </Button>
      </div>

      <div className="overflow-hidden py-10">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <Avatar className="h-24 w-24 border-4 border-background">
                      <AvatarImage
                        src={testimonials[current].avatar || "/placeholder.svg"}
                        alt={testimonials[current].name}
                      />
                      <AvatarFallback>{testimonials[current].name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-grow">
                    <Quote className="h-10 w-10 text-rose-600/20 mb-4" />
                    <p className="text-lg md:text-xl italic mb-6">{testimonials[current].content}</p>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonials[current].name}</h4>
                      <p className="text-muted-foreground">{testimonials[current].role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-12 w-12 bg-background/80 backdrop-blur-sm shadow-md hover:bg-background"
          onClick={next}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${index === current ? "w-8 bg-rose-600" : "bg-muted"}`}
            onClick={() => {
              setDirection(index > current ? 1 : -1)
              setCurrent(index)
            }}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
