import Link from 'next/link'
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="bg-background shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Project Showcase</Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/websites">Websites</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/mobile-apps">Mobile Apps</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/ai-ml">AI/ML</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/blockchain">Blockchain</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/cybersecurity">Cybersecurity</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/about">About Me</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/blog">Blog</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header

