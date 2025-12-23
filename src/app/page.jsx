import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to BlogApp
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover amazing blog posts and stories from writers around the
            world. Read, explore, and get inspired.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/blogs">Explore Blogs</Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/blogs">Get Started</Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {/* <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              📚 Rich Content
            </h3>
            <p className="text-gray-600">
              Access a wide variety of blog posts covering different topics and
              interests.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              🚀 Easy Navigation
            </h3>
            <p className="text-gray-600">
              Browse through posts effortlessly with our clean and intuitive
              interface.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              💡 Discover More
            </h3>
            <p className="text-gray-600">
              Find new perspectives and ideas from talented writers and content
              creators.
            </p>
          </div> */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">📚 Rich Content</CardTitle>
              <CardDescription>
                Access a wide variety of blog posts covering different topics
                and interests.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">🚀 Easy Navigation</CardTitle>
              <CardDescription>
                Browse through posts effortlessly with our clean and intuitive
                interface.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">💡 Discover More</CardTitle>
              <CardDescription>
                Find new perspectives and ideas from talented writers and
                content creators.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
