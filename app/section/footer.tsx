import { SocialsLink } from "../components/socials-link";

export const Footer = () => {
	return (
		<aside>
			<ul className="flex flex-row flex-wrap md:flex-row mt-8 space-x-4 space-y-0 md:space-x-4 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
				<SocialsLink
					url="https://www.linkedin.com/in/aryanbharti/"
					title="Linkedin"
				/>
				<SocialsLink url="mailto:workaryanbharti@gmail.com" title="Email" />
				<SocialsLink url="https://github.com/woaitsAryan" title="Github" />
			</ul>
		</aside>
	);
};
