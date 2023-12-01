import ArrowIcon from "../components/ArrowIcon";

interface projectProps {
    name: string;
    url: string;
    description: string;
}

const ProjectLink = (props: projectProps) => {
    return (
        <li className="group py-1.5" key = {props.url}>
            <a
                href={props.url}
                className="border  border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full transform transition duration-500 ease-in-out hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:scale-[102%]"
                >
                <div className="flex flex-col">
                    <p className="font-medium text-neutral-900 dark:text-neutral-100">
                        {props.name}
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        {props.description}
                    </p>
                </div>
                <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
                    <ArrowIcon />
                </div>
            </a>
        </li>
    );
}

export default ProjectLink