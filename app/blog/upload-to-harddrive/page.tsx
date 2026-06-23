import Link from "next/link";
import { notFound } from "next/navigation";
import "../blog.css";

export default function ExternalHarddrive() {
  return (
    <article className="blog-post">
       <Link className="back" href="/">← Home</Link>

<h1>How to Transfer Files from iCloud to an External Hard Drive</h1>

<div
style={{
position: "relative",
paddingBottom: "56.25%",
height: 0,
overflow: "hidden",
}}
>
<iframe
src="https://www.youtube.com/embed/gw9t_U_Acpg?si=BAl6x2EnBtLPK-qj"
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