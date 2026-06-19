import Link from "next/link";
import { notFound } from "next/navigation";
import { content } from "../../data/content";

export function generateStaticParams() {
  return content
    .filter((item) => item.section === "blog")
    .map((item) => ({ slug: item.slug }));
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = content.find((entry) => entry.slug === slug && entry.section === "blog");

  if (!item) notFound();

  return (
    <main className="page">
      <Link className="back" href="/#blog">← Blog</Link>

      <h1>{item.title}</h1>
      <p className="article-meta">{item.year}</p>

      <article className="article">
        {item.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
