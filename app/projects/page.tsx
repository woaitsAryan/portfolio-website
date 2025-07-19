import type { Metadata } from "next";
import { Suspense } from "react";
import { projectData } from "@/data/project";
import Skeleton from "../components/skeleton";
import { ProjectLink } from "./link";

export const metadata: Metadata = {
	title: "Projects",
	description: "Projects I've worked on",
};

const Projects = () => {
	return (
		<section>
			<h1 className="font-semibold text-2xl mb-8 tracking-tighter">
				Have a look at my projects / random stuff I've worked on.
			</h1>
			<Suspense fallback={<Skeleton />}>
				<ul>
					{projectData.map((project) => (
						<ProjectLink
							key={project.url}
							name={project.name}
							url={project.url}
							description={project.description}
						/>
					))}
				</ul>
			</Suspense>
		</section>
	);
};

export default Projects;
