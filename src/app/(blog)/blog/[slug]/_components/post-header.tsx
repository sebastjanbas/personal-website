"use client";

import { BlogPost } from "@/lib/blog-data";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function PostHeader({ post }: { post: BlogPost }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const coverY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const CATEGORY_GRADIENTS: Record<string, string> = {
    Backend: "from-indigo-500/30 to-purple-600/30",
    "AI/ML": "from-cyan-500/30 to-blue-600/30",
    Systems: "from-emerald-500/30 to-teal-600/30",
    Thoughts: "from-rose-500/30 to-pink-600/30",
  };

  const gradient =
    CATEGORY_GRADIENTS[post.category] ?? "from-gray-500/30 to-gray-600/30";

  return (
    <div ref={containerRef}>
      <section className="px-6 md:px-12 pt-12 pb-8">
        <motion.div style={{ opacity: titleOpacity }}>
          <div className="flex items-center gap-3 mb-6 text-sm text-light-gray/50">
            <span>{formattedDate}</span>
            <span>&middot;</span>
            <span>{post.category}</span>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-light-gray max-w-4xl mb-6">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-light-gray/50 max-w-2xl">
            {post.description}
          </p>
        </motion.div>
      </section>

      <div className="px-6 md:px-12 pb-12">
        <motion.div
          style={{ y: coverY }}
          className={`relative w-full aspect-[21/9] rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} border border-white/5`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/60 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
