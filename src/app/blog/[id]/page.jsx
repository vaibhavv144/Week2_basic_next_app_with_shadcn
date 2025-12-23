"use client";
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { use } from 'react';
import { fetchBlogById } from '../../api/blogs';

export default function BlogDetail({ params }) {
  const { id } = use(params);
  const query = useQuery({
    queryKey: ['blog', id],
    queryFn: () => fetchBlogById(id),
  });
  
  const { data: blog, isLoading, error } = query;
  
  //console.log(query);
  console.log(query.data);
  console.log(query.status);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center text-rose-600">Loading blog...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center text-red-600">Error: {error.message}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          ← Back to blogs
        </Link>
        
        <article className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            {blog?.title}
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              {blog?.body}
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Post ID: {blog?.id} | User ID: {blog?.userId}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}