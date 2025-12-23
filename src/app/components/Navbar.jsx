import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            BlogApp
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/blogs" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}