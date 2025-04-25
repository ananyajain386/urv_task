"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function BasketballInteraction() {
  const [score, setScore] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState("")
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 300
    canvas.height = 300

    // Draw basketball court
    ctx.fillStyle = "#FF9800"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw court lines
    ctx.strokeStyle = "white"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2)
    ctx.stroke()

    // Draw basketball hoop
    ctx.beginPath()
    ctx.arc(canvas.width / 2, 50, 30, 0, Math.PI, true)
    ctx.stroke()

    // Draw basketball
    const ball = new Image()
    ball.crossOrigin = "anonymous"
    ball.src = "/white.svg?height=40&width=40"
    ball.onload = () => {
      ctx.drawImage(ball, canvas.width / 2 - 20, canvas.height - 60, 40, 40)
    }
  }, [])

  const shootBall = () => {
    if (isAnimating) return

    setIsAnimating(true)

    // Determine if shot is successful (70% chance)
    const isSuccessful = Math.random() < 0.7

    setTimeout(() => {
      if (isSuccessful) {
        setScore((prev) => prev + 2)
        setMessage("Swish! +2 points")
      } else {
        setMessage("Missed! Try again")
      }
      setShowMessage(true)
      setTimeout(() => setShowMessage(false), 2000)
      setIsAnimating(false)
    }, 1000)
  }

  return (
    <div className="relative flex flex-col items-center">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold">Basketball Challenge</h3>
        <p className="text-muted-foreground">State Champion in Basketball</p>
        <div className="mt-2 text-2xl font-bold">Score: {score}</div>
      </div>

      <div className="relative">
        <canvas ref={canvasRef} className="border rounded-lg shadow-md" width={300} height={300} />

        {isAnimating && (
          <motion.div
            className="absolute bottom-14 left-1/2 w-10 h-10 rounded-full bg-orange-500"
            initial={{ y: 0, x: -20 }}
            animate={{
              y: [-50, -150, -50, 0],
              x: [-20, -20, -20, -20],
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        )}

        {showMessage && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white px-4 py-2 rounded-md">
            {message}
          </div>
        )}
      </div>

      <Button onClick={shootBall} disabled={isAnimating} className="mt-4">
        Shoot Ball
      </Button>
    </div>
  )
}
