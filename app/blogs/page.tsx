import type { Metadata } from 'next';
import { Suspense } from 'react';
import BlogSkeleton from '../components/blogSkeleton';
import BlogLink from '../components/blogLink';

export const metadata: Metadata = {
    title: 'Blogs',
    description: 'Blogs I\'ve written',
};

const Blogs = () => {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Have a look at my blogs! (more coming soon)
            </h1>
            <div className="my-8 flex flex-col space-y-4 w-full">
                <Suspense fallback={<BlogSkeleton />}>
                    <BlogLink
                        name="I hacked IIT Bombay&apos;s website. Here&apos;s exactly how I did it."
                        link="https://medium.com/@workaryanbharti/i-hacked-iit-bombays-website-here-s-exactly-how-i-did-it-22b5d18e7336"
                    />
                </Suspense>
            </div>
        </section>
    )
}

export default Blogs;