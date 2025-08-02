import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import BlogCard from "@/Components/moleculs/BlogCard";
import NewestBlog from "@/Pages/User/Part/NewestBlog";
import ListBlog from "@/Components/organisms/ListBlog";

export default function Blog({ auth, blogs }) {
    return (
        <>
            <Head title="Daftar Postingan" />
            <MainLayout auth={auth} blogs={blogs}>
                <NewestBlog blogs={blogs} />
                <ListBlog blogs={blogs} />
                
            </MainLayout>
        </>
    );
}
