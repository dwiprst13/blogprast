export default function NewestBlog({ blogs }) {
    return (
        <>
            <div>
                <h1>Postingan Terbaru</h1>

                {blogs.map((post) => (
                    <div key={post.id} className="mb-4">
                    <h2>{post.title}</h2>
                    <p>
                        Oleh: {post.user.name} | Kategori: {post.category_id}
                    </p>

                    <div>
                        <strong>Tags:</strong>{' '}
                        {/* {post.tags.map((tag) => (
                        <span key={tag.id}>{tag.name} </span>
                        ))} */}
                    </div>

                    <p>{post.excerpt}</p>
                    </div>
                ))}

            </div>
        </>
    );
}