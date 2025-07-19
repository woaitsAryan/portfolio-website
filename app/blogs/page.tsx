import type { Metadata } from "next";
import { blogData } from "@/data/blog";
import { BlogLink } from "./blog-link";

export const metadata: Metadata = {
	title: "Blogs",
	description: "Blogs I've written",
};

const Blogs = () => {
	return (
		<section>
			<h1 className="font-semibold text-2xl mb-8 tracking-tighter">Have a look at my blogs!</h1>
			<div className="my-8 flex flex-col space-y-4 w-full">
				<ul>
					{blogData.map((blog) => (
						<BlogLink key={blog.url} name={blog.name} url={blog.url} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default Blogs;
