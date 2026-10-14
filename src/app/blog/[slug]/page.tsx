import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  blogs,
  getBlogBySlug,
} from "@/lib/blogs";
import { Suspense } from "react";

type BlogDetailProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "http://localhost:3000"
).replace(/\/$/, "");

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}



export async function generateMetadata({
  params,
}: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `${siteUrl}/blog/${blog.slug}`;

  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: blog.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      title: blog.title,
      description: blog.excerpt,
      publishedTime: new Date(
        `${blog.publishedAt}T12:00:00Z`
      ).toISOString(),
      images: [
        {
          url: blog.coverImage,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
    },
  };
}
export default function BlogDetailPage({
  params,
}: BlogDetailProps) {
  return (
    <Suspense
      fallback={
        <main className="container article-container">
          <p>Loading article...</p>
        </main>
      }
    >
      <BlogDetailContent params={params} />
    </Suspense>
  );
}
async function BlogDetailContent({
  params,
}: BlogDetailProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const publishedDate = new Date(
    `${blog.publishedAt}T12:00:00Z`
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  const relatedBlogs = blogs
    .filter((item) => item.slug !== blog.slug)
    .filter((item) => item.category === blog.category)
    .slice(0, 3);

  const fallbackRelated =
    relatedBlogs.length > 0
      ? relatedBlogs
      : blogs
          .filter((item) => item.slug !== blog.slug)
          .slice(0, 3);

  const articleUrl = `${siteUrl}/blog/${blog.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: [blog.coverImage],
    datePublished: blog.publishedAt,
    dateModified: blog.publishedAt,
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Organization",
      name: "Your Blog",
    },
    publisher: {
      "@type": "Organization",
      name: "Your Blog",
    },
  };

  return (
    <main className="container article-container">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span aria-current="page">{blog.title}</span>
      </nav>

      <article>
        <header className="article-header">
          <span className="eyebrow">{blog.category}</span>
          <h1>{blog.title}</h1>
          <p className="article-excerpt">{blog.excerpt}</p>

          <div className="article-meta">
            <time dateTime={blog.publishedAt}>
              {publishedDate}
            </time>
            <span aria-hidden="true">·</span>
            <span>{blog.readTime}</span>
          </div>
        </header>

        <div className="article-cover">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            width={1600}
            height={900}
            priority
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>

        <div className="article-body">
          {blog.sections.map((section, index) => (
            <section key={`${blog.slug}-${index}`}>
              <h2>{section.heading}</h2>

              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}

              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <footer className="article-footer">
          <h2>Topics covered</h2>
          <div className="tag-list">
            {blog.keywords.map((keyword) => (
              <span className="tag" key={keyword}>
                {keyword}
              </span>
            ))}
          </div>
          <Link href="/blog" className="back-link">
            ← Back to all articles
          </Link>
        </footer>
      </article>

      <section className="related-section">
        <h2>Keep exploring</h2>
        <div className="blog-grid">
          {fallbackRelated.map((relatedBlog) => (
            <div key={relatedBlog.slug}>
              <Link href={`/blog/${relatedBlog.slug}`}>
                {relatedBlog.title}
              </Link>
              <p>{relatedBlog.excerpt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      /> */}
    </main>
  );
}