"use client";

import { BlogPost } from "@/lib/blog-data";
import { motion } from "motion/react";
import Link from "next/link";

const CATEGORY_GRADIENTS: Record<string, string> = {
  Backend: "from-indigo-500/20 to-purple-600/20",
  "AI/ML": "from-cyan-500/20 to-blue-600/20",
  Systems: "from-emerald-500/20 to-teal-600/20",
  Thoughts: "from-rose-500/20 to-pink-600/20",
};

export default function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  const gradient =
    CATEGORY_GRADIENTS[post.category] ?? "from-gray-500/20 to-gray-600/20";

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div
          className={`relative overflow-hidden rounded-xl bg-linear-to-br ${gradient} border border-white/5 ${
            featured ? "aspect-4/3" : "aspect-3/2"
          } transition-colors duration-300 group-hover:border-white/10`}
        >
          <div className="absolute inset-0 bg-linear-to-t from-dark-gray/90 via-dark-gray/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-medium uppercase tracking-wider text-light-gray/50">
                {post.category}
              </span>
              <span className="text-light-gray/20">&middot;</span>
              <span className="text-xs text-light-gray/40">
                {formattedDate}
              </span>
            </div>
            <h3
              className={`font-bold tracking-tight text-light-gray mb-2 ${
                featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
              }`}
            >
              {post.title}
            </h3>
            <p
              className={`text-light-gray/50 leading-relaxed ${
                featured
                  ? "text-sm md:text-base line-clamp-3"
                  : "text-sm line-clamp-2"
              }`}
            >
              {post.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
