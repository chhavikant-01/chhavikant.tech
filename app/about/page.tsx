import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="text-xl">
        I&apos;m a passionate software developer with experience in various domains of the software industry. 
        My expertise spans web development, mobile app creation, AI/ML implementations, blockchain solutions, and cybersecurity practices.
      </p>
      <h2 className="text-2xl font-semibold">Skills</h2>
      <ul className="list-disc list-inside">
        <li>Web Development: React, Next.js, Node.js, Express</li>
        <li>Mobile App Development: React Native, Flutter</li>
        <li>AI/ML: TensorFlow, PyTorch, scikit-learn</li>
        <li>Blockchain: Ethereum, Solidity, Web3.js</li>
        <li>Cybersecurity: Network Security, Penetration Testing</li>
      </ul>
      <div className="flex space-x-4">
        <Button asChild>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="mailto:your.email@example.com">Contact Me</Link>
        </Button>
      </div>
    </div>
  )
}

