export const BodyComponent = () => {
	return (
		<section>
			<h1 className="font-semibold text-2xl mb-8 tracking-tighter">Hey! I&apos;m Aryan Bharti</h1>
			<div className="prose prose-neutral dark:prose-invert">
				<p>A bit about myself</p>
			</div>
			<ul className="prose prose-neutral dark:prose-invert list-disc space-y-2 my-6 ml-2">
				<li>
					Tech enthusiast. Always up-to-date with current trends like reading Typescript beta notes, but mainly dwelling
					in tech twitter etc.
				</li>
				<li>Backend and systems dev. I love learning about them and figuring out how they work.</li>
				<li>Speaker. I love talking about tech, from hosting podcasts to speaking at college's open source events.</li>
				<li>
					Writer. I love writing technical blogs and sharing my knowledge with others, my blogs are linked in the navbar
					above.
				</li>
				<li>I enjoy doing CyberSec for fun, and in my free time, I like to participate in CTFs.</li>
			</ul>
			<div className="prose prose-neutral dark:prose-invert">
				<p>
					If any of the above interests you, feel free to reach out to me on my Linkedin, would love to chat!
				</p>
			</div>
		</section>
	);
};
