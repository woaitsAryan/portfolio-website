import { Suspense } from "react";
import BlogSkeleton from "../components/blogSkeleton";
import BlogLink from "../components/blogLink";
import SocialsLink from "../components/socialsLink";

const BodyComponent = () => {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                hi, I&apos;m Aryan Bharti 👋
            </h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                   About me
                </p>
            </div>
            <ul className="prose prose-neutral dark:prose-invert list-disc">
                <li>
                    I love tech, all the systems and innovations in place in order to make a computer tick, I love learning about them.
                </li>
                <li>
                    Backend Dev. I find coding them to be so incredibly fullfilling.
                </li>
                <li>
                    DevOps and Cloud is something I&apos;m not very proficient in but constantly learning and improving.
                </li>
                <li>
                    I do CyberSec for fun. CTFs is something I do in my free time.
                </li>
            </ul>
            {/* <div className="columns-2 sm:columns-3 gap-4 my-8">
                <div className="relative h-40 mb-4">
                    <Image
                        alt="Me speaking on stage at React Summit about the future of Next.js"
                        src={summit}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-80 mb-4 sm:mb-0">
                    <Image
                        alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
                        src={filming}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover object-[-16px] sm:object-center"
                    />
                </div>
                <div className="relative h-40 sm:h-80 sm:mb-4">
                    <Image
                        alt="Me standing on stage at Reactathon delivering the keynote"
                        src={reactathon}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover object-top sm:object-center"
                    />
                </div>
                <div className="relative h-40 mb-4 sm:mb-0">
                    <Image
                        alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
                        src={smashing}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-40 mb-4">
                    <Image
                        alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
                        src={ship}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-80">
                    <Image
                        alt="My badge on top of a pile of badges from a Vercel meetup we held"
                        src={meetups}
                        fill
                        sizes="(min-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
            </div> */}
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    I also love talking about tech, from hosting podcasts to speaking at an open source event and writing technical blogs.
                    They are linked below if you want to check them out.
                </p>
            </div>
            <div className="my-8 flex flex-col space-y-4 w-full">
                <Suspense fallback={<BlogSkeleton />}>
                    <BlogLink
                        name="I hacked IIT Bombay&apos;s website. Here&apos;s exactly how I did it."
                        link="https://medium.com/@workaryanbharti/i-hacked-iit-bombays-website-here-s-exactly-how-i-did-it-22b5d18e7336"
                    />
                </Suspense>
            </div>
           
        </section>
    );
}

export default BodyComponent;