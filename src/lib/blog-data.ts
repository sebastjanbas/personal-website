
export type BlogCategory = "Backend" | "AI/ML" | "Systems" | "Thoughts";

export const BLOG_CATEGORIES: BlogCategory[] = [
    "Backend",
    "AI/ML",
    "Systems",
    "Thoughts",
];

export type BlogStatus = "published" | "draft" | "coming-soon";

export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    category: BlogCategory;
    date: string;
    readingTime: string;
    featured: boolean;
    status: BlogStatus;
    content: {
        intro: string;
        sections: { heading: string; body: string }[];
    };
    relatedSlugs: string[];
};

export const BLOG_DATA: BlogPost[] = [];
