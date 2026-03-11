import { sharedMetadata } from "@/lib/docs";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of my projects and work.",
  ...sharedMetadata,
};

export default function ProjectsPage() {
  return (
    <section className="flex justify-center items-center w-full h-screen bg-light-gray overflow-hidden px-4 md:px-10 xl:px-20">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] tracking-tighter font-interDisplay font-semibold text-[#1F1F1F] leading-[0.85] select-none">
          Coming Soon
        </h1>
        <p className="text-[#383838] font-interDisplay font-medium text-lg sm:text-xl md:text-2xl tracking-tight mt-6 md:mt-8">
          A dedicated projects page is on the way.
        </p>
        <Link href="/" className="mt-8 md:mt-10">
          <span
            className="text-[#383838] font-interDisplay font-medium text-sm lg:text-base tracking-tight
              md:after:block md:after:h-px md:after:origin-left md:after:scale-x-0 md:after:bg-[#383838]
              md:after:transition-transform md:after:duration-500
              md:hover:after:scale-x-100 transition-all"
          >
            &larr; Back to home
          </span>
        </Link>
      </div>
    </section>
  );
}