import Link from "next/link";
import { content } from "../data/content";

export default function BlogPage() {
const posts = content.filter((item) => item.section === "blog");

return (
<main className="page">
<Link className="back" href="/">
← Home
</Link>

<h1>Blog</h1>

<div className="index-list">
{posts.map((item, index) => (
<Link className="row" href={`/blog/${item.slug}`} key={item.slug}>
<span className="row-num">
{String(index + 1).padStart(2, "0")}
</span>
<span className="row-title">{item.title}</span>
<span className="row-meta">{item.year}</span>
</Link>
))}
</div>
</main>
);
}