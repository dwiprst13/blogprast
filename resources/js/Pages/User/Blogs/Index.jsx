

export default function Index({ blogs }) {
  return (
    <div>
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

      {/* Navigasi Pagination */}
      <div className="mt-6">
        {blogs.prev_page_url && (
          <button onClick={() => Inertia.visit(blogs.prev_page_url)}>Previous</button>
        )}
        {blogs.next_page_url && (
          <button onClick={() => Inertia.visit(blogs.next_page_url)}>Next</button>
        )}
      </div>
    </div>
  );
}
