import type { Metadata } from 'next';
import projectData from './projectData';
import ProjectLink from './projectLink';
import { Suspense } from 'react';
import Skeleton from '../components/skeleton';

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
            <Suspense fallback={<Skeleton />}>
                <ul>
                    {projectData.map((project) => (
                        <ProjectLink key={project.url} name={project.name} url={project.url} description={project.description} />
                    ))}
                </ul>
            </Suspense>
        </section>
    );
}

export default Projects;