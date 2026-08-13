import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Manifesto",
	description: "My tech manifesto",
};

const Manifesto = () => {
	return (
		<section>
			<div className="prose prose-neutral dark:prose-invert">
				<p>This is my tech manifesto. Opinions are my own and nothing to do with my employer.</p>
			</div>
			<ul className="prose prose-neutral dark:prose-invert list-disc space-y-2 mt-6 mb-2 ml-2">
				<li>
					You can't write production code with dynamically typed languages. At the very least, you should use a language server on top with strict typing.
				</li>
				<li>File names should be kebab case. Variables and functions should be camel case. Types and interfaces should be Pascal case.</li>
				<li>Default exports should almost never be used.</li>
				<li>For almost all use cases, using a language without garbage collection is a waste of time.</li>
				<li>You should be able to write a simple script to run your code in a container.</li>
			</ul>
		</section>
	);
};

export default Manifesto;
