import Link from "next/link";
import { notFound } from "next/navigation";
import "../projects.css";

export default function BrainStudio() {
  return (
    <article className="blog-post">
       <Link className="back" href="/">← Home</Link>

      <h1 style= {{color:"#4823ed"}}>
        BrainSTUDIO

      </h1>

       
       <p>
        Brain Studio is an AI-powered research workspace built into my personal productivity platform. 
        It was designed to help me bridge the gap between academic research and practical innovation. 
        The feature pulls real research papers, uses AI to generate clear summaries, explains why the research matters, 
        identifies the companies and industries that could be affected, and highlights potential market opportunities. 
        It also connects the research to relevant market signals and news to provide additional context. 
        Rather than spending hours reading technical papers, I can quickly understand emerging technologies, explore new product ideas, 
        and evaluate how research may translate into real-world applications. My vision for Brain Studio is to create a single place where research, 
        market intelligence, and strategic thinking come together to support better decision-making and continuous learning.

       </p>

       <div
style={{
position: "relative",
paddingBottom: "56.25%",
height: 0,
overflow: "hidden",
}}
>


<iframe
src="https://www.youtube.com/embed/H4qdMjkgNcg?si=I6Y8qDJ0Nat6kJV6"
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


{/* <video
controls
style={{
width: "100%",
borderRadius: "12px",
}}
>
<source src="/videos/BRAINSTUDIO-fixed.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video> */}


      <hr />
    </article>
  );
}