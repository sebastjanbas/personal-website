import { BLOG_DATA } from "@/lib/blog-data";
import BlogCard from "../../_components/blog-card";

type RelatedPostsProps = {
  currentSlug: string;
  relatedSlugs: string[];
};

export default function RelatedPosts({
  currentSlug,
  relatedSlugs,
}: RelatedPostsProps) {
  const related = BLOG_DATA.filter(
    (p) => relatedSlugs.includes(p.slug) && p.slug !== currentSlug
  );

  if (related.length === 0) return null;

  return (
    <section className="px-6 md:px-12 pb-24">
      <h2 className="text-sm font-medium uppercase tracking-widest text-light-gray/30 mb-6">
        Related Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {related.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
