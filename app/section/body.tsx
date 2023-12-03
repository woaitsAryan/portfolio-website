
const BodyComponent = () => {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Hey! I&apos;m Aryan Bharti
            </h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    A bit about myself
                </p>
            </div>
            <ul className="prose prose-neutral dark:prose-invert list-disc">
                <li>
                    I love tech. All the systems and innovations in place in order to make a computer tick. I love learning about them.
                </li>
                <li>
                    Backend Dev. I find coding them to be so incredibly fullfilling.
                </li>
                <li>
                    DevOps and Cloud is something I&apos;m not very proficient in but am constantly learning and improving.
                </li>
                <li>
                    I enjoy doing CyberSec for fun, and in my free time, I like to participate CTFs.
                </li>
            </ul>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    I also love talking about tech, from hosting podcasts to speaking at an open source event and writing technical blogs.
                    My projects and blogs are linked in the navbar above.
                </p>
            </div>


        </section>
    );
}

export default BodyComponent;