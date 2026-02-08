import { BLOG_DATA } from "@/lib/blog-data";
import BlogCard from "./blog-card";

export default function FeaturedPosts() {
  const featured = BLOG_DATA.filter((post) => post.featured);

  if (featured.length === 0) return null;

  return (
    <section className="px-6 md:px-12 pb-16">
      <h2 className="text-sm font-medium uppercase tracking-widest text-light-gray/30 mb-6">
        Featured
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {featured.map((post) => (
          <BlogCard key={post.slug} post={post} featured />
        ))}
      </div>
    </section>
  );
}
