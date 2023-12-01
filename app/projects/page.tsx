import type { Metadata } from 'next';
import Link from 'next/link';
import projectData from './projectData';
import ProjectLink from './projectLink';
import { propagateServerField } from 'next/dist/server/lib/render-server';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Projects I\'ve worked on',
};

const Projects = () => {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Have a look at my projects
            </h1>
            <ul>
                {projectData.map((project) => (
                    <ProjectLink key = {project.url} name={project.name} url={project.url} description={project.description} />
                ))}
            </ul>
        </section>
    );
}

export default Projects;