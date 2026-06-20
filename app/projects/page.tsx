import Link from "next/link";
import { content } from "../data/content";

export default function ProjectsPage() {
const projects = content.filter((item) => item.section === "projects");

return (
<main className="page">
<Link className="back" href="/">
← Home
</Link>

<h1>Projects</h1>

<div className="index-list">
{projects.map((item, index) => (
<Link className="row" href={`/projects/${item.slug}`} key={item.slug}>
<span className="row-num">{String(index + 1).padStart(2, "0")}</span>
<span className="row-title">{item.title}</span>
<span className="row-meta">{item.year}</span>
</Link>
))}
</div>
</main>
);
}