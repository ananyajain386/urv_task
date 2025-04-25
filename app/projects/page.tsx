"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <main className="container py-12">
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-600/10 to-transparent rounded-lg"></div>
        <div className="relative p-8 md:p-12">
          <Badge variant="outline" className="px-4 py-1 text-sm font-medium mb-4">
            My Work
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            A showcase of my technical projects and applications I've built.
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="web">Web Development</TabsTrigger>
            <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-16">
          <ProjectSection />
        </TabsContent>

        <TabsContent value="web" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              id="ecobuild"
              title="ECOBUILD"
              description="Developed a centralized online tool showcasing sustainable construction techniques, incorporating planning resources for architects and builders; reduced project planning time by 30%"
              tags={["React.js", "Tailwind CSS", "JavaScript"]}
              image="/placeholder.svg?height=400&width=600"
              viewlink="https://github.com/ananyajain386/HBM"
              codeSnippet={`// Component for displaying sustainable materials
function SustainableMaterial({ name, description, co2Reduction }) {
  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition-all">
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-3 flex items-center">
        <span className="text-green-600 font-semibold">
          CO2 Reduction: {co2Reduction}%
        </span>
      </div>
    </div>
  );
}`}
            />
            <ProjectCard
              id="paytm-clone"
              title="Paytm Clone"
              description="Developed a paytm clone covering all the basic features like transactions, payment history that it provides"
              tags={["React.js", "CSS", "JavaScript"]}
              image="/placeholder3.svg?height=400&width=600"
              viewlink="https://github.com/ananyajain386/Paywind"
              codeSnippet={`// Transaction history component with filtering
function TransactionHistory({ transactions }) {
  const [filter, setFilter] = useState('all');
  
  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'all') return true;
    return transaction.type === filter;
  });
  
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button 
          size="sm" 
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button 
          size="sm" 
          variant={filter === 'sent' ? 'default' : 'outline'}
          onClick={() => setFilter('sent')}
        >
          Sent
        </Button>
        <Button 
          size="sm" 
          variant={filter === 'received' ? 'default' : 'outline'}
          onClick={() => setFilter('received')}
        >
          Received
        </Button>
      </div>
      
      {filteredTransactions.map(transaction => (
        <TransactionItem key={transaction.id} {...transaction} />
      ))}
    </div>
  );
}`}
            />
          </div>
        </TabsContent>

        <TabsContent value="fullstack" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              id="student-portal"
              title="STUDENT PORTAL"
              description="Developed student portal for KIET Group of Institutions including various modules like COE, Academics, Hostel Allotment. Streamlined all the academic activities starting from registration and covering entire student lifecycle."
              tags={["React.js", "Next.js", "Django", "MySQL"]}
              viewlink="https://tech.kiet.edu/StudentPortal/#/dashboard"
              image="/placeholder.svg?height=400&width=600"
              codeSnippet={`// Server component for fetching student data
async function getStudentData(studentId) {
  try {
    const response = await fetch(
      \`\${process.env.API_URL}/students/\${studentId}\`,
      { cache: 'no-store' }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch student data');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching student data:', error);
    return null;
  }
}`}
            />
            <ProjectCard
              id="headquarters"
              title="HEADQUARTERS"
              description="Developed a party management system including features like party request, reimbursement, leave request."
              viewlink="https://headquarters-pms.vercel.app/"
              tags={["React.js", "Django", "Python", "MySQL"]}
              image="/placeholder1.svg?height=400&width=600"
              codeSnippet={`// React component for leave request form
              
function LeaveRequestForm() {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    reason: '',
    type: 'casual'
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/leave-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast.success('Leave request submitted successfully');
        // Reset form
        setFormData({
          startDate: '',
          endDate: '',
          reason: '',
          type: 'casual'
        });
      }
    } catch (error) {
      toast.error('Failed to submit leave request');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields would go here */}
    </form>
  );
}`}
            />
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

function ProjectSection() {
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
    <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="space-y-24">
      <motion.div variants={itemVariants} id="student-portal">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Student Portal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-rose-600 hover:bg-rose-700 text-white">Featured Project</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">STUDENT PORTAL</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-base">
                  A comprehensive student portal for KIET Group of Institutions
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Django</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Developed student portal for KIET Group of Institutions including various modules like COE, Academics,
                  Hostel Allotment. Streamlined all the academic activities starting from registration and covering
                  entire student lifecycle.
                </p>
                <div className="bg-muted p-4 rounded-md overflow-x-auto">
                  <pre className="text-sm">
                    <code>
                      {`// Server component for fetching student data
async function getStudentData(studentId) {
  try {
    const response = await fetch(
      \`\${process.env.API_URL}/students/\${studentId}\`,
      { cache: 'no-store' }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch student data');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching student data:', error);
    return null;
  }
}`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="h-full border-t-4 border-t-rose-600">
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Student registration and profile management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Course enrollment and academic tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Hostel allocation and management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Examination results and grade tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Fee payment and financial records</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} id="headquarters">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Headquarters"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">HEADQUARTERS</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-base">
                  A party management system with comprehensive features
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Django</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Developed a party management system including features like party request, reimbursement, leave
                  request. The system streamlines the process of organizing events and managing team activities.
                </p>
                <div className="bg-muted p-4 rounded-md overflow-x-auto">
                  <pre className="text-sm">
                    <code>
                      {`// React component for leave request form
function LeaveRequestForm() {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    reason: '',
    type: 'casual'
  });
  
    = useState({
    startDate: '',
    endDate: '',
    reason: '',
    type: 'casual'
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/leave-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast.success('Leave request submitted successfully');
        // Reset form
        setFormData({
          startDate: '',
          endDate: '',
          reason: '',
          type: 'casual'
        });
      }
    } catch (error) {
      toast.error('Failed to submit leave request');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields would go here */}
    </form>
  );
}`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="h-full border-t-4 border-t-rose-600">
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Party and event request management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Expense tracking and reimbursement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Leave request and approval workflow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Team management and coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Reporting and analytics dashboard</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} id="ecobuild">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/placeholder2.svg?height=400&width=800"
                  alt="Ecobuild"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">ECOBUILD</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-base">
                  A centralized online tool for sustainable construction techniques
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Developed a centralized online tool showcasing sustainable construction techniques, incorporating
                  planning resources for architects and builders; reduced project planning time by 30%.
                </p>
                <div className="bg-muted p-4 rounded-md overflow-x-auto">
                  <pre className="text-sm">
                    <code>
                      {`// Component for displaying sustainable materials
function SustainableMaterial({ name, description, co2Reduction }) {
  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition-all">
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-3 flex items-center">
        <span className="text-green-600 font-semibold">
          CO2 Reduction: {co2Reduction}%
        </span>
      </div>
    </div>
  );
}`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="h-full border-t-4 border-t-rose-600">
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Sustainable material database</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Environmental impact calculator</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Project planning tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Supplier directory</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-rose-100 dark:bg-rose-950/30 flex items-center justify-center text-rose-600 flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Case studies and best practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ id, title, description, tags, image, codeSnippet,viewlink }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1, transition: { duration: 0.5 } })
    }
  }, [controls, inView])

  return (
    <motion.div ref={ref} initial={{ y: 50, opacity: 0 }} animate={controls} id={id} className="h-full">
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 border-none bg-card/50 backdrop-blur-sm">
        <div className="relative overflow-hidden h-48">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="pb-2 flex-grow">
          <div className="bg-muted p-4 rounded-md overflow-x-auto">
            <pre className="text-sm">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-2">
          {/* <Button variant="outline" size="sm" asChild>
            <a href={codelink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button> */}
          <Button size="sm" asChild>
            <a href={viewlink} target="_blank" rel="noopener noreferrer">
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
