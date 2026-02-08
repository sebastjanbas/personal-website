import type { Metadata } from "next";
import BlogHero from "./_components/blog-hero";
import FeaturedPosts from "./_components/featured-posts";
import PostsGrid from "./_components/posts-grid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts, tutorials, and notes on web development, DevOps, and building things that matter.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <FeaturedPosts />
      <PostsGrid />
    </>
  );
}
