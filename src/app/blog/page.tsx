import type { Metadata } from "next";

import { blogs } from "@/lib/blogs";
import BlogCard from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog | Insights, Guides & Tips",
  description:
    "Explore practical guides, productivity tips, technology trends, and advice to help you learn and grow.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Insights, Guides & Tips",
    description:
      "Explore our latest articles, guides, and tips.",
    type: "website",
  },
};

export default function BlogPage() {
  const sortedBlogs = [...blogs].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime()
  );

  return (
    <main className="container">
      <header className="blog-header">
        <span className="eyebrow">THE JOURNAL</span>
        <h1>Ideas worth exploring.</h1>
        <p>
          Discover practical guides, fresh perspectives, and
          useful ideas to help you learn something new.
        </p>
      </header>

      <section
        className="blog-grid"
        aria-label="Latest blog articles"
      >
        {sortedBlogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </section>
    </main>
  );
}