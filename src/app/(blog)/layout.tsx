import Link from "next/link";
import React from "react";
import BlogSidebar from "./blog/_components/blog-sidebar";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-dark-gray text-light-gray">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 bg-dark-gray/80 backdrop-blur-md">
        <Link
          href="/"
          className="text-sm font-medium text-light-gray/70 transition-colors hover:text-light-gray group"
        >
          <span className="inline-block mr-2 transition-transform group-hover:-translate-x-1">&larr;</span>
          Sebastjan Bas
        </Link>
        <Link
          href="/blog"
          className="text-sm font-medium text-light-gray/70 transition-colors hover:text-light-gray"
        >
          Blog
        </Link>
      </header>

      <BlogSidebar />

      <main className="pt-20 lg:pl-64">{children}</main>
    </div>
  );
}
