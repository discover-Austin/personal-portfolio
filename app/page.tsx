import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-100/40 dark:bg-primary-800/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center">
            <p className="text-sm md:text-base font-medium tracking-widest uppercase text-primary-600 dark:text-primary-400 mb-4">
              Full Stack Engineer &mdash; Indianapolis, IN
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
              Hi, I&apos;m <span className="text-primary-600 dark:text-primary-400">Austin</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              I architect and ship high-performance web applications where
              thoughtful design meets bulletproof engineering.
            </p>
            <p className="text-base text-gray-500 dark:text-gray-500 mb-12 max-w-xl mx-auto">
              Every line of code serves a purpose. Every interface earns trust.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/portfolio"
                className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-all inline-flex items-center gap-2 shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30"
              >
                Explore My Work <FaArrowRight className="transition-transform group-hover:translate-x-1" size={14} />
              </Link>
              <Link
                href="/contact"
                className="bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white px-8 py-3.5 rounded-lg font-semibold border border-gray-200 dark:border-slate-600 transition-all shadow-sm hover:shadow-md"
              >
                Let&apos;s Connect
              </Link>
            </div>
            <div className="flex justify-center gap-6 mt-14">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-primary-600 dark:text-primary-400 text-center mb-3">
            What I Work With
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white tracking-tight">
            Core Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'Git', 'Docker'].map((skill) => (
              <div
                key={skill}
                className="group bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 dark:border-slate-700 text-center transition-all hover:-translate-y-0.5"
              >
                <p className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-gray-900 dark:bg-slate-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            I take on select projects where quality and ambition align.
            If that sounds like yours, let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg shadow-primary-600/25"
          >
            Start the Conversation <FaArrowRight className="transition-transform group-hover:translate-x-1" size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
