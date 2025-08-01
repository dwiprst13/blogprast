import { Head } from '@inertiajs/react';
import Header from '@/Components/organisms/Header';
import BlogBanner from '@/Components/organisms/BlogBanner';
import NewestBlog from '../../Components/organisms/NewestBlog';


export default function Dashboard({ auth, laravelVersion, phpVersion, newestBlogs }) {
    // const handleImageError = () => {
    //     document
    //         .getElementById('screenshot-container')
    //         ?.classList.add('!hidden');
    //     document.getElementById('docs-card')?.classList.add('!row-span-1');
    //     document
    //         .getElementById('docs-card-content')
    //         ?.classList.add('!flex-row');
    //     document.getElementById('background')?.classList.add('!hidden');
    // };
    // console.log('Data dari Laravel:', newestBlogs);

    return (
        <>
            <Head title="Dwi Prasetia Blog" />
            <div className="bg-gray-50 dark:bg-gray-900">
                <div className="relative flex min-h-screen justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full">
                        <Header auth={auth} className="flex justify-between" />
                        <main className="">
                            <BlogBanner/>
                            <NewestBlog blogs={newestBlogs}/>
                        </main>

                    </div>
                </div>
            </div>
        </>
    );
}
