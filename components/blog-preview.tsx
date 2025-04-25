"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt:
      "Learn how to create beautiful, responsive user interfaces using Tailwind CSS, a utility-first CSS framework.",
    date: "April 15, 2024",
    readTime: "5 min read",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Server Components in Next.js: A Game Changer",
    excerpt:
      "Explore how Server Components in Next.js can improve performance and developer experience by moving rendering logic to the server.",
    date: "March 28, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "My Journey from Basketball to Coding",
    excerpt:
      "A personal story about how the discipline and teamwork I learned from basketball helped me excel in software development.",
    date: "February 10, 2024",
    readTime: "6 min read",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function BlogPreview() {
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
    <div>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {blogPosts.map((post) => (
          <motion.div key={post.id} variants={itemVariants}>
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2 flex-grow"></CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto" asChild>
                  <Link href="#">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-12">
        <Button variant="outline" asChild>
          <Link href="#">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
