import type { Metadata } from "next";
import { projectData } from "@/data/project";
import { FeaturedProjectCard } from "./featured-card";
import { ProjectLink } from "./link";

export const metadata: Metadata = {
	title: "Projects",
	description: "Projects I've worked on",
};

const Projects = () => {
	const featuredProjects = projectData.filter((project) => project.isFeatured);

	return (
		<section>
			<h1 className="font-semibold text-2xl mb-8 tracking-tighter">
				Have a look at my projects / random stuff I've worked on.
			</h1>

			{/* Featured Projects - visually distinguished with pin icons */}
			{featuredProjects.length > 0 && (
				<div className="mb-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{featuredProjects.map((project) => (
							<FeaturedProjectCard
								key={project.url}
								name={project.name}
								url={project.url}
								description={project.description}
							/>
						))}
					</div>
				</div>
			)}

			{/* All Projects - standard list format */}
			<ul>
				{projectData.map((project) => (
					<ProjectLink key={project.url} name={project.name} url={project.url} description={project.description} />
				))}
			</ul>
		</section>
	);
};

export default Projects;
