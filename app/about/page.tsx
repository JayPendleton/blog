import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="page">
      <Link className="back" href="/">← Home</Link>

      <h1>About</h1>

      <p className="page-description">
        I am Jay P. I write and build around personal systems, AI, product
        design, finance habits, discipline, and daily execution.
      </p>

      <article className="article">
        <p>
          This site is a minimal archive for essays, notes, and projects. It is
          intentionally text-first, quiet, and direct.
        </p>

        <p>
          I am most interested in software that makes people more capable:
          systems that help decide, prioritize, reflect, and execute.
        </p>

        <h2>Contact</h2>
        <p>
          For inquiries, email{" "}
          <a href="mailto:javonnasam@gmail.com">javonnasam@gmail.com</a>.
        </p>
      </article>
    </main>
  );
}
