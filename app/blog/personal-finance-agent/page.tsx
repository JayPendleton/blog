import Link from "next/link";
import { notFound } from "next/navigation";
import "../blog.css";

export default function FinancialAgent() {
  return (
    <article className="blog-post">
       <Link className="back" href="/">← Home</Link>

<h1>Personal Finance Agent with Copilot Studio</h1>

<p>
  Level: Intermediate </p>
<p>Time: 2 hours</p>

<p>Used a SharePoint Excel file as the knowledge base so it can understand my financial data, and created a Power Automate flow to trigger tasks and pull specific information when I ask. The data is made up for the purpose of this demo.

I know there are ways to connect AI agents directly to your bank account, but I personally don’t consider that secure.

You can also feed bots a spreadsheet, however, this setup lets the agent reference structured knowledge and actually trigger actions, not just read static data. If I update the Excel, the agent response will also update.

Thinking through ways to expand the agent’s capabilities.</p>

<div
style={{
position: "relative",
paddingBottom: "56.25%",
height: 0,
overflow: "hidden",
}}
>
<iframe
src="https://www.youtube.com/embed/kHMAbuREslg?feature=share"
title="How to Transfer Files from iCloud to an External Hard Drive"
style={{
position: "absolute",
top: 0,
left: 0,
width: "100%",
height: "100%",
}}
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowFullScreen
/>
</div>




      <hr />
    </article>
  );
}