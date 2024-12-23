'use client'

import { useState } from 'react'
import ProjectCard from '@/components/project-card'
import ProjectDialog from '@/components/project-dialog'

const websiteProjects = [
  {
    title: "E-commerce Platform",
    briefDescription: "A fully functional e-commerce website with product listings, shopping cart, and checkout process.",
    description: "This e-commerce platform provides a seamless shopping experience for users. It features a responsive design that works well on both desktop and mobile devices, ensuring that customers can shop from anywhere.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    features: [
      "Responsive design for optimal viewing on all devices",
      "User authentication and account management",
      "Advanced product search and filtering options",
      "Secure payment integration with Stripe",
      "Order tracking and history for users",
      "Admin panel for managing products, orders, and users"
    ],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    demoUrl: "https://www.youtube.com/watch?v=demo-video-id",
    liveUrl: "https://ecommerce-platform-demo.vercel.app",
    thumbnail: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "Portfolio Website",
    briefDescription: "A sleek and modern portfolio website showcasing my projects and skills.",
    description: "This portfolio website serves as a digital resume and project showcase. It's designed to highlight my skills, experience, and projects in an engaging and interactive manner.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive design with smooth animations",
      "Dark mode support",
      "Project showcase with filtering options",
      "Integrated blog for sharing insights and experiences",
      "Contact form with email integration"
    ],
    githubUrl: "https://github.com/yourusername/portfolio-website",
    liveUrl: "https://your-portfolio-website.com",
    thumbnail: "/placeholder.svg?height=200&width=400"
  },
  // Add more website projects here
]

export default function WebsitesPage() {
  const [selectedProject, setSelectedProject] = useState<typeof websiteProjects[0] | null>(null)

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Website Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {websiteProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            briefDescription={project.briefDescription}
            technologies={project.technologies}
            thumbnail={project.thumbnail}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectDialog
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </div>
  )
}

