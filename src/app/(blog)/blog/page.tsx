import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts, tutorials, and notes on web development, DevOps, and building things that matter.",
};

export default function BlogPage() {
  return (
    <section className="flex justify-center items-center w-full h-[calc(100vh-80px)] overflow-hidden px-4 md:px-10 xl:px-20">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] tracking-tighter font-interDisplay font-semibold text-[#F0EFEB] leading-[0.85] select-none">
          Coming Soon
        </h1>
        <p className="text-[#7A7A7A] font-interDisplay font-medium text-lg sm:text-xl md:text-2xl tracking-tight mt-6 md:mt-8">
          The blog is being written.
        </p>
        <Link href="/" className="mt-8 md:mt-10">
          <span
            className="text-[#6A6A6A] font-interDisplay font-medium text-sm lg:text-base tracking-tight
              md:after:block md:after:h-px md:after:origin-left md:after:scale-x-0 md:after:bg-[#9A9A9A]
              md:after:transition-transform md:after:duration-500
              md:hover:after:scale-x-100 hover:text-[#C8C7C3] transition-colors"
          >
            &larr; Back to home
          </span>
        </Link>
      </div>
    </section>
  );
}