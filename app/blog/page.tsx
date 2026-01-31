import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { FaCalendar, FaTag, FaArrowRight } from 'react-icons/fa'

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-widest uppercase text-primary-600 dark:text-primary-400 mb-3">
            Writing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            Blog
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Thoughts, tutorials, and insights on web development
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 dark:text-gray-500">
              No posts yet. Check back soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white dark:bg-slate-800/50 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-slate-700/50 hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 dark:text-gray-500">
                      <FaCalendar size={11} />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white tracking-tight">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 dark:bg-slate-700/50 text-gray-500 dark:text-gray-400 rounded-lg text-xs font-medium border border-gray-100 dark:border-slate-600/50"
                        >
                          <FaTag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    href={`/blog/${post.slug}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    Read more <FaArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
