"use client";

import { LayoutGroup } from "framer-motion";
import { Suspense } from "react";
import { NavItem } from "../components/nav-item";

const navItems = {
	"/": {
		name: "home",
	},
	"/projects": {
		name: "projects",
	},
	"/blogs": {
		name: "blogs",
	},
	"resume.pdf": {
		name: "resume",
	},
};

export const Navbar = () => {
	return (
		<aside className="-ml-[8px] mb-8 tracking-tight">
			<div className="lg:sticky lg:top-20">
				<LayoutGroup>
					<nav
						className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
						id="nav"
					>
						<div className="flex flex-row space-x-0 pr-10">
							<Suspense fallback={null}>
								{Object.entries(navItems).map(([url, { name }]) => {
									return <NavItem key={url} url={url} name={name} />;
								})}
							</Suspense>
						</div>
					</nav>
				</LayoutGroup>
			</div>
		</aside>
	);
};
