"use client";

import { BLOG_DATA, BLOG_CATEGORIES, type BlogCategory } from "@/lib/blog-data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function CategoryGroup({ category }: { category: BlogCategory }) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();
  const posts = BLOG_DATA.filter((p) => p.category === category);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left text-sm font-medium text-light-gray/70 hover:text-light-gray transition-colors py-1.5"
      >
        {category}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-light-gray/30 text-xs"
        >
          &#9662;
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {posts.map((post) => {
              const isActive = pathname === `/blog/${post.slug}`;
              return (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={`block text-[13px] leading-snug py-1.5 pl-3 border-l transition-colors ${
                      isActive
                        ? "text-light-gray border-light-gray/60"
                        : "text-light-gray/40 border-white/5 hover:text-light-gray/70 hover:border-white/20"
                    }`}
                  >
                    {post.title}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BlogSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-light-gray/10 backdrop-blur-md border border-white/10 text-light-gray text-sm px-4 py-2.5 rounded-full hover:bg-light-gray/20 transition-colors"
      >
        {mobileOpen ? "Close" : "Menu"}
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-dark-gray/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-dark-gray border-r border-white/5 pt-20 pb-8 px-5 overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="space-y-5">
          <div>
            <Link
              href="/blog"
              className="text-sm font-medium text-light-gray/70 hover:text-light-gray transition-colors"
            >
              All Posts
            </Link>
          </div>

          {BLOG_CATEGORIES.map((cat) => (
            <CategoryGroup key={cat} category={cat} />
          ))}
        </nav>
      </aside>
    </>
  );
}
