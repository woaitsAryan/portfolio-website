import SocialsLink from "../components/socialsLink";

const Footer = () => {
    return (
        <section>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    To contact with me, email me or connect with me on Linkedin!
                </p>
            </div>
            <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
                <SocialsLink url="https://www.linkedin.com/in/aryanbharti/" title="Linkedin" />
                <SocialsLink url="mailto:workaryanbharti@gmail.com" title="Email" />
                <SocialsLink url="https://github.com/woaitsAryan" title="Github" />
            </ul>
        </section>
    )
}

export default Footer;