

export default function TagSection({ tags, className = '' }) {
    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Tag
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Daftar tag yang digunakan pada blog ini.
                </p>
            </header>

            <div className="mt-6 space-y-4">
                {tags.map((tag) => (
                    <span
                        key={tag.id}
                        className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                        {tag.name}
                    </span>
                ))}
            </div>
        </section>
    );
}