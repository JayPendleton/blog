import Link from "next/link";
import { notFound } from "next/navigation";
import "../projects.css";

export default function ProofAlbum() {
  return (
    <article className="blog-post">
       <Link className="back" href="/">← Home</Link>

      <h1>Proof Album</h1>

      <h2>Coming Soon</h2>

       {/* <p><b>To the avid AI User:</b></p>
       <p>Have you ever entered “2+2” into a calculator while already knowing the answer is 4, but you just had to make sure? This act reflects the human desire for verification. When using artificial intelligence tools, it is essential to validate the information provided. Always research the sources referenced by the AI tool and seek additional reliable evidence on your own. 
Remember, AI systems are trained on extensive datasets that may contain inaccuracies and are far from all knowing.</p>

<p>One day, my cousin and I were discussing the “beef” between SZA and Nicki Minaj, and she mentioned that SZA was signed to Roc Nation. I corrected her, saying, "No, she's signed to TDE- Top Dawg Entertainment". I asked her where she found that information, and she replied that she got it from a Bing AI search. I assume that the discussion around SZA and Nicki Minaj caused that information to be the first thing that popped up. It’s essential to read and verify your sources! :)
</p>


<p><b>To the AI Critic:</b></p>
<p>
  It can be frustrating to navigate an internet increasingly mediated by AI features. However, it is important to recognize that users retain the option to disable many of these functions. Though even when AI settings are turned off in browsers, search engines, or applications, the underlying systems may still use AI models, such as transformers to interpret and refine queries. At a basic level, a transformer is a kind of AI model that learns to predict the next word in a sentence by looking at the words around it. I’ll discuss and visualize transformers in a later post.
</p>

<p><b>To All:</b></p>

<p>
One implication of artificial intelligence lies in its use within job application processes. Many employers now rely on automated hiring tools. I’ve come across numerous job seekers who have complained about submiting applications through platforms such as LinkedIn, Indeed, or company websites, only to receive immediate automated rejections.
In New York City, Local Law 144 requires employers who use AI-driven hiring tools to conduct annual bias audits and to inform candidates when these systems are being used. The law also mandates that employers notify applicants about the role of AI in hiring decisions, allowing individuals the option to opt out of having their applications evaluated by those automated systems.
For job seekers outside of New York City, it is advised to contact the company’s human resources department or the listed recruiter directly to inquire about whether AI is involved in their hiring process. Legislation around AI can be found in the Artificial Intelligence Legislation Database.
</p> */}
	



      <hr />
    </article>
  );
}