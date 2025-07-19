"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface FeaturedProjectProps {
	name: string;
	url: string;
	description: string;
}

export const FeaturedProjectCard = (props: FeaturedProjectProps) => {
	const ctrls = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			ctrls.start("visible");
		}
		if (!inView) {
			ctrls.start("hidden");
		}
	}, [ctrls, inView]);

	const cardAnimation = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.div ref={ref} className="group" animate={ctrls} variants={cardAnimation} initial="hidden">
			<a
				href={props.url}
				className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 block transform transition duration-500 ease-in-out hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:scale-[102%] hover:shadow-lg"
			>
				<h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2 text-sm">{props.name}</h3>
				<p className="text-neutral-600 dark:text-neutral-400 text-xs leading-relaxed">{props.description}</p>
			</a>
		</motion.div>
	);
};
