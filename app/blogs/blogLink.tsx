'use client';

import ArrowIcon from "../components/ArrowIcon";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

interface BlogLinkProps {
    url: string;
    name: string;
}

const BlogLink = (props: BlogLinkProps) => {

    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.5,
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

    const listAnimation = {
        hidden: {
            opacity: 0,
            y: 10,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.li ref={ref} className="group py-1.5" key={props.url} animate={ctrls} variants={listAnimation} initial="hidden" >
            <a
                href={props.url}
                className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full transform transition duration-500 ease-in-out hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:scale-[102%]"
            >
                <div className="flex flex-col">
                    <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                        {props.name}
                    </p>
                </div>
                <div className="text-neutral-700 dark:text-neutral-300">
                    <ArrowIcon />
                </div>
            </a>
        </motion.li>
    );
}

export default BlogLink;