import ArrowIcon from "./ArrowIcon";

interface BlogLinkProps {
  link: string;
  name: string;
}

const BlogLink = async (props: BlogLinkProps) => {
  return (
    <a
      href={props.link}
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full transform transition duration-500 ease-in-out hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:scale-[102%]"
      >
      <div className="flex flex-col">
        <p className="font-semibold text-neutral-900 dark:text-neutral-100">
          {props.name}
        </p>
      </div>
      <div className="text-neutral-700 dark:text-neutral-300">
        <ArrowIcon/>
      </div>
    </a>
  );
}

export default BlogLink;