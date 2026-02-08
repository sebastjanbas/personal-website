import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_DATA } from "@/lib/blog-data";
import PostHeader from "./_components/post-header";
import PostBody from "./_components/post-body";
import RelatedPosts from "./_components/related-posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_DATA.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_DATA.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_DATA.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PostHeader post={post} />
      <PostBody content={post.content} />
      <RelatedPosts currentSlug={post.slug} relatedSlugs={post.relatedSlugs} />
    </>
  );
}
