import type { Metadata } from 'next';
import { Suspense } from 'react';
import BlogLink from './blogLink';
import { blogData } from './blogData';
import Skeleton from '../components/skeleton';

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
                <Suspense fallback={<Skeleton/>}>
                    <ul>
                        {blogData.map((blog) => (
                            <BlogLink key={blog.url} name={blog.name} url={blog.url}/>
                        ))}
                    </ul>
                </Suspense>
            </div>
        </section>
    )
}

export default Blogs;