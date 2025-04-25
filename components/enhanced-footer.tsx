"use client"

import Link from "next/link"
import { useState } from "react"
import { Github, Linkedin, Mail, Phone, MapPin, ChevronRight, ExternalLink, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function EnhancedFooter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* About Column */}
          <div className="space-y-4">
            <Link href="/" className="font-bold text-2xl inline-block">
              <span className="text-rose-600">A</span>nanya
            </Link>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating intuitive and efficient web applications with modern
              technologies.
            </p>
            <div className="flex gap-3 pt-2">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                <a href="https://github.com/ananyajain386" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                <a href="https://linkedin.com/in/ananyajain386" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                <a href="mailto:ananyajain386@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="h-3 w-3" /> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="h-3 w-3" /> About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="h-3 w-3" /> Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="h-3 w-3" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-rose-600 mt-0.5" />
                <div>
                  <span className="block text-sm font-medium">Email</span>
                  <a
                    href="mailto:ananyajain386@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ananyajain386@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-rose-600 mt-0.5" />
                <div>
                  <span className="block text-sm font-medium">Phone</span>
                  <a href="tel:+917983227256" className="text-muted-foreground hover:text-foreground transition-colors">
                    +91-7983227256
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-rose-600 mt-0.5" />
                <div>
                  <span className="block text-sm font-medium">Location</span>
                  <span className="text-muted-foreground">Ghaziabad, Uttar Pradesh, India</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row just items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Ananya Jain. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-rose-600 fill-rose-600" />
            <span>using</span>
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-foreground transition-colors"
            >
              Next.js <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
            <span>&</span>
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-foreground transition-colors"
            >
              Tailwind CSS <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
