import Link from "next/link";
import { notFound } from "next/navigation";
import "../blog.css";

export default function OurOwnMaking() {
  return (
    <article className="blog-post">
       <Link className="back" href="/">← Home</Link>

      <h1>Our Own Making</h1>

      <p>
        Our Own Making
Who bears responsibility for the environmental consequences around Artificial Intelligence? Many consumers point fingers at corporations, accusing them of building massive data centers that pollute nearby areas and displace marginalized communities by acquiring land and inflating costs. Even so, humanity’s growing appetite for convenience fuels greater consumption; thus, encouraging environmental toll.
Engineers are often termed as individuals who identify problems, or convince society that a problem exists, then design and execute solutions. In order for engineers to decrease or reform their engineering, society has to decrease its demand. This would mean less consumption of social media, chatbots, and automations. We'd have to rely on human thinking, human connection, and placing limits on sharing personal information. There has to be a balance between technological advancement and authenticity.
</p>

<p>IBM defines Artificial Intelligence as technology that enables computers and machines to simulate human learning, comprehension, problem solving, decision making, creativity and autonomy. Artificial intelligence is not new. The average person with limited knowledge of AI history but exposed to the influx of Generative AI videos and photos circulating online, make it appear like a recent development and alarming method of technology.
Theories around machines “thinking” independently of humans began before the 1900’s. By 1951 the first Artificial Intelligence Neural Network(ANN), was built by Marvin Minsky and Dean Edmunds, lightly imitating a biological neural network. In humans, the neurons receive and process information using electrical signals. These signals travel across synapses, which allow communication with the nervous system. 
The strength of a connection between neurons changes through experiences and is defined as the synaptic weight. The synaptic weight determines the level of significance one neuron has with another.  In AI, nodes(neurons) receive inputs and performs a calculation that measures accuracy and learns by adjusting itself based on the produced result. 
Facial recognition is a widely used technology to access phones or applications. This is powered by Artificial Intelligence Neural Networks(ANNs). The nodes are assigned numbers that represent each feature of your face. The ANN compares the stored facial data with the snapshot received from the user to determine if the match is close enough to verify your identity. If you have an iPhone, the Photos App does the same thing. The application recognizes certain people you've taken multiple photos with, groups them, and labels them without human interference. Another example is smartphone keyboards. ANNs learn how an individual's types based on the inputs.
</p>

<p>List of technologies that use different types of ANNs:</p>
	
<ul>
	 <li><h4>Speech and Voice Recognition</h4></li>
    
		 Siri, Alexa, Google Assistant <br/>
		YouTube captions
  
	<li><h4> Image and Facial Recognition</h4></li>
		○ Security systems<br/>
		○ Medical Imaging

	<li><h4> Email</h4></li>
		○ Categorization and organization<br/>
		○ Malware and spam detection

	<li><h4> Search Engine</h4></li>
		○ Query comprehension(meaning, context, and intent of search)<br/>
		○ Relevance and quality of results based on user engagement, history, and location

	<li><h4> Language Translation</h4></li>
		○ Google Translate<br/>
		○ Chatbots- ChatGPT, Bing/Microsoft Copilot

	<li><h4> Healthcare Disease Detection</h4></li>
		○ Medical scans for diagnosis of cancer, diabetes, and Alzheimer's<br/>
	<li><h4> Art</h4></li>
		○ DALL-E<br/>
		○ Photoshop (background removal, image enhancement, etc.)<br/>
		○ ChatGPT and model GPT-5

	<li><h4> Financial </h4></li>
		○ Bank fraud detection<br/>
		○ Stock market predictions

	<li><h4> Environmental</h4></li>
		○ Weather prediction<br/>
		○ Climate change simulations
    </ul>
    

<p>Artificial Intelligence Neural Networks (ANNs) contribution represents a small fragment in the vast landscape of Artificial Intelligence. The broader picture is made up of various models and technologies like Machine Learning, Deep Learning, Natural Language Processing (NLP), and most recent advancements such as Large Language Models (LLMs). These models are often integrated with ANNs to drive innovation and the evolution of intelligent technology. This means enhanced communication, advancing healthcare, tasks are automated, boosting productivity, and ultimately life is more convenient. Yet, that convenience comes at a cost.
It is difficult to grasp the true impact of AI without AI companies explicitly sharing their electric consumption data. It's not lost that the general public has concerns surrounding the risks of Artificial Intelligence, specifically environmental risks such as high carbons emissions, high water usage, and high electricity usage of AI models. 
Researchers are constantly working on making AI more sustainable by using renewable energy like solar and wind, developing more efficient models, and recycling waste heat. AI can optimize electricity by scaling distribution and reducing waste. It can also support the environment with precision farming like agritech(agriculture and tech) companies providing tools to help farmers effectively manage resources and increase yields by obtaining data from sensors, drones, and satellites.
Google claims to be carbon free by 2030. Though according to Bloomberg, in 2023 emissions rose 48% at 14.3 million metric tons of CO2 compared to 2019 and in 2024 it only decreased by 12%. With the rising consumption of these technologies, that claim seems far-fetched.
What are your thoughts?
</p>


      <hr />
    </article>
  );
}