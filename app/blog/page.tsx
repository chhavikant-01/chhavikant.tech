import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const blogPosts = [
  {
    title: "Introduction to Next.js 13",
    description: "Learn about the new features in Next.js 13 and how to use them in your projects.",
    date: "2023-05-15",
    slug: "intro-to-nextjs-13"
  },
  {
    title: "Building Secure Smart Contracts",
    description: "Best practices for developing secure smart contracts on the Ethereum blockchain.",
    date: "2023-05-01",
    slug: "secure-smart-contracts"
  },
  // Add more blog posts here
]

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

