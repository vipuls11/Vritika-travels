import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blogs";

type BlogCardProps = {
  blog: BlogPost;
};

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="blog-card">
      <Link
        href={`/blog/${blog.slug}`}
        className="blog-card-image"
        aria-label={`Read ${blog.title}`}
      >
        <Image
          src={blog.coverImage}
          alt={blog.title}
          width={450}
          height={200}
          sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
        />
      </Link>

      <div className="blog-card-content">
        <div className="blog-meta">
          <span>{blog.category}</span>
          <span>{blog.readTime}</span>
        </div>

        <h2>
          <Link href={`/blog/${blog.slug}`}>
            {blog.title}
          </Link>
        </h2>

        <p>{blog.excerpt}</p>

        <Link
          href={`/blog/${blog.slug}`}
          className="read-more"
        >
          Read article <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}