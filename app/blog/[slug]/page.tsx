import Link from "next/link";
import { notFound } from "next/navigation";
import { content } from "../../data/content";

export function generateStaticParams() {
  return content
    .filter((item) => item.section === "essays")
    .map((item) => ({ slug: item.slug }));
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = content.find((entry) => entry.slug === slug && entry.section === "essays");

  if (!item) notFound();

  return (
    <main className="page">
      <Link className="back" href="/#essays">← Essays</Link>

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
