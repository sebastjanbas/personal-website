"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BLOG_CATEGORIES, BLOG_DATA, type BlogCategory } from "@/lib/blog-data";
import BlogCard from "./blog-card";

export default function PostsGrid() {
  const [active, setActive] = useState<BlogCategory | "All">("All");

  const filtered =
    active === "All"
      ? BLOG_DATA
      : BLOG_DATA.filter((p) => p.category === active);

  const pills: (BlogCategory | "All")[] = ["All", ...BLOG_CATEGORIES];

  return (
    <section className="px-6 md:px-12 pb-24">
      <div className="flex flex-wrap gap-2 mb-10">
        {pills.map((pill) => (
          <button
            key={pill}
            onClick={() => setActive(pill)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              active === pill
                ? "bg-light-gray text-dark-gray"
                : "bg-white/5 text-light-gray/60 hover:bg-white/10 hover:text-light-gray"
            }`}
          >
            {pill}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
