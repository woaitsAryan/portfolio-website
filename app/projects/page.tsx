import type { Metadata } from 'next';
import Link from 'next/link';
import projectData from './projectData';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Projects I\'ve worked on',
};

const ProjectsPage = () => {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Have a look at my projects
            </h1>
            <ul>
                {projectData.map((project) => (
                    <li key={project.url}>
                        <Link
                            className="flex flex-col space-y-1 mb-4"
                            href={project.url} >
                            <div className="w-full flex flex-col">
                                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                                    {project.name}
                                </p>
                            </div>
                        </Link>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            {project.tech}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ProjectsPage;