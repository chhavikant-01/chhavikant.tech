import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Welcome to My Project Showcase</h1>
      <p className="text-xl text-center">
        Explore my projects across various domains of the software industry
      </p>
      <div className="flex justify-center space-x-4">
        <Button asChild>
          <Link href="/websites">Websites</Link>
        </Button>
        <Button asChild>
          <Link href="/mobile-apps">Mobile Apps</Link>
        </Button>
        <Button asChild>
          <Link href="/ai-ml">AI/ML</Link>
        </Button>
        <Button asChild>
          <Link href="/blockchain">Blockchain</Link>
        </Button>
        <Button asChild>
          <Link href="/cybersecurity">Cybersecurity</Link>
        </Button>
      </div>
    </div>
  )
}

