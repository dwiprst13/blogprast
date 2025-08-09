import { Head } from "@inertiajs/react";
import BlogBanner from "@/Components/organisms/BlogBanner";
import NewestBlog from "../Blog/NewestBlog";
import MainLayout from "@/Layouts/MainLayout";

export default function Dashboard({ auth, newestBlogs }) {
    return (
        <>
            <Head title="Dwi Prasetia Blog" />
            <MainLayout auth={auth}>
                <BlogBanner />
                <NewestBlog blogs={newestBlogs} />
            </MainLayout>
        </>
    );
}
