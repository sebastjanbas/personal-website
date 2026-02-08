"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type PostBodyProps = {
  content: {
    intro: string;
    sections: { heading: string; body: string }[];
  };
};

function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function PostBody({ content }: PostBodyProps) {
  return (
    <article className="px-6 md:px-12 max-w-3xl pb-20">
      <ScrollReveal>
        <p className="text-lg md:text-xl leading-relaxed text-light-gray/80 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-light-gray">
          {content.intro}
        </p>
      </ScrollReveal>

      <hr className="my-12 border-white/10" />

      {content.sections.map((section) => (
        <ScrollReveal key={section.heading}>
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-light-gray mb-4">
              {section.heading}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-light-gray/70">
              {section.body}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </article>
  );
}
