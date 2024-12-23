import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  briefDescription: string
  technologies: string[]
  thumbnail: string
  onClick: () => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  briefDescription,
  technologies,
  thumbnail,
  onClick
}) => {
  return (
    <Card className="w-full cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <Image src={thumbnail} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{briefDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard

