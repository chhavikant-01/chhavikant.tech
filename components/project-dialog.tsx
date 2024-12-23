import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface ProjectDialogProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    technologies: string[]
    features: string[]
    githubUrl: string
    demoUrl?: string
    liveUrl?: string
  }
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({ isOpen, onClose, project }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc list-inside">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-4">
            <Button asChild>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</Link>
            </Button>
            {project.demoUrl && (
              <Button asChild variant="outline">
                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo Video</Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild variant="secondary">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Project</Link>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectDialog

