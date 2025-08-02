import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import BlogCard from "@/Components/moleculs/BlogCard";
import NewestBlog from "@/Components/organisms/NewestBlog";
import ListBlog from "@/Components/organisms/ListBlog";


export default function Blog({ auth, blogs }) {
  return (
    <>
    <Head title="Daftar Postingan" />
    <MainLayout auth={auth} blogs={blogs}>
      <NewestBlog blogs={blogs} />
      <ListBlog blogs={blogs} />
      {/* <BlogCard blogs={blogs} /> */}
      {/* Uncomment the following section if you want to display the blog posts in a list format */}
      {/* <div>
      <h1>Daftar Postingan</h1>

      {blogs.map((post) => (
        <div key={post.id} className="mb-4">
          <h2>{post.title}</h2>
          <p>
            Oleh: {post.user.name} | Kategori: {post.category_id}
          </p>

          <div>
            <strong>Tags:</strong>{' '}
            {post.tags.map((tag) => (
              <span key={tag.id}>{tag.name} </span>
            ))}
          </div>

          <p>{post.excerpt}</p>
        </div>
      ))}

      <div className="mt-6">
        {blogs.prev_page_url && (
          <button onClick={() => Inertia.visit(blogs.prev_page_url)}>Previous</button>
        )}
        {blogs.next_page_url && (
          <button onClick={() => Inertia.visit(blogs.next_page_url)}>Next</button>
        )}
      </div>
    </div> */}
    </MainLayout>
    </>
  );
}
