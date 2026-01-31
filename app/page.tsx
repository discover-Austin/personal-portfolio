import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              Hi, I&apos;m <span className="text-primary-600 dark:text-primary-400">Austin</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Full Stack Engineer. Precision-Driven Builder.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              I architect and ship high-performance web applications where thoughtful
              design meets bulletproof engineering. Every line of code serves a purpose.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/portfolio"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                Explore My Work <FaArrowRight />
              </Link>
              <Link
                href="/contact"
                className="bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold border-2 border-gray-300 dark:border-slate-600 transition-colors"
              >
                Let&apos;s Connect
              </Link>
            </div>
            <div className="flex justify-center gap-6 mt-12">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FaGithub size={32} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FaLinkedin size={32} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FaTwitter size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Core Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'Git', 'Docker'].map((skill) => (
              <div
                key={skill}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border border-gray-200 dark:border-slate-700"
              >
                <p className="font-semibold text-gray-900 dark:text-white">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-primary-600 dark:bg-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            I&apos;m selectively taking on new projects where quality and ambition align.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
