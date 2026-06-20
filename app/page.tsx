import Link from "next/link";
import { content, sections } from "./data/content";
import "./globals.css";

function SectionIndex({
  id,
  label,
}: {
  id: "blog" | "projects" | "notes";
  label: string;
}) {
  const items = content.filter((item) => item.section === id);

  return (
    <section className="index" id={id}>
      <div className="index-label">{label}</div>

      <div className="index-list">
        {items.map((item, index) => (
          <Link className="row" href={`/${id}/${item.slug}`} key={item.slug}>
            <span className="row-num">{String(index + 1).padStart(2, "0")}</span>
            <span className="row-title">{item.title}</span>
            <span className="row-meta">{item.year}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="site">
      <header className="topbar">
        <Link href="/" className="name">
          Jay P
        </Link>

        <nav className="nav" aria-label="Main navigation">
          <a href="#blog">Blog</a>
          <a href="#projects">Projects</a>
          <a href="#notes">Notes</a>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <section className="intro">
        <div>
          <p className="kicker">Systems / Technology / Self-exploration</p>
          <h1>Consider this a public notebook for the systems, tools, and lessons I’m collecting along the way.
            If something here resonates, I hope it helps you think more clearly about your own path.</h1>
            {/* Observing how technology shapes attention, identity, and decision-making.</h1> */}
          <p className="intro-copy">
            
            
            {/* Essays, projects, and notes on personal operating systems,
            agentic software, product taste, and daily execution. */}
          </p>
        </div>

        {/* <aside className="side-note">
          <p>
            I am Jay. I work on software, systems, finance habits, life design,
            and tools that help people make better decisions.
          </p>
          <p>
            This site is a public notebook for what I am building and learning.
          </p>
        </aside> */}
      </section>


      {sections.map((section) => (
        <SectionIndex
          key={section.id}
          id={section.id}
          label={section.label}
        />
      ))}


      <footer className="footer">
        <span>For inquiries: jaypendleton07@gmail.com</span>
        <span>© 2026 Jay P</span>
      </footer>
    </main>
  );
}
