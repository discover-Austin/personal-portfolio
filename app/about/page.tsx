import { FaCode, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa'

export default function About() {
  return (
    <div className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Engineering robust solutions at the intersection of design and performance
          </p>
        </div>

        {/* Bio Section */}
        <div className="mb-16 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-md border border-gray-200 dark:border-slate-700">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Hello &mdash; I&apos;m Austin
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I&apos;m a full-stack engineer based in Indianapolis, Indiana, focused on
              building refined, high-performance digital products. Over several years in
              the industry, I&apos;ve delivered everything from lean startup MVPs to
              enterprise-grade platforms &mdash; each held to the same exacting standard.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              My foundation is rooted in modern JavaScript and TypeScript ecosystems
              &mdash; React, Next.js, and Node.js form my primary toolkit. I stay
              deliberately current with emerging technologies, but I never chase trends
              at the expense of reliability. The right tool for the right problem, every time.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Beyond the editor, I invest my time in open-source contribution, technical
              writing, and mentorship &mdash; because the best engineers lift others as
              they climb.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Guiding Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 text-center">
              <div className="text-primary-600 dark:text-primary-400 flex justify-center mb-4">
                <FaCode size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Craftsmanship
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Code should be intentional, readable, and built to endure &mdash; never just to ship
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 text-center">
              <div className="text-primary-600 dark:text-primary-400 flex justify-center mb-4">
                <FaLightbulb size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Leveraging cutting-edge approaches to solve real problems, not hypothetical ones
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 text-center">
              <div className="text-primary-600 dark:text-primary-400 flex justify-center mb-4">
                <FaRocket size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every millisecond matters &mdash; I optimize relentlessly so users never have to wait
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 text-center">
              <div className="text-primary-600 dark:text-primary-400 flex justify-center mb-4">
                <FaUsers size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                The strongest products emerge from aligned teams with shared ownership and clear communication
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Experience & Education
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-l-4 border-primary-600 dark:border-primary-400">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Senior Full Stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Tech Company &bull; 2021 &ndash; Present</p>
              <p className="text-gray-700 dark:text-gray-300">
                Spearheading the architecture and delivery of scalable web applications
                using React, Next.js, and Node.js. Establishing engineering standards,
                leading code reviews, and mentoring developers across the organization.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-l-4 border-primary-600 dark:border-primary-400">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Full Stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Digital Agency &bull; 2019 &ndash; 2021</p>
              <p className="text-gray-700 dark:text-gray-300">
                Delivered end-to-end solutions for a diverse client portfolio, specializing
                in responsive interfaces and performance-tuned backends using modern web technologies.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-l-4 border-primary-600 dark:border-primary-400">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Bachelor of Computer Science
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">University &bull; 2015 &ndash; 2019</p>
              <p className="text-gray-700 dark:text-gray-300">
                Concentrated in software engineering, distributed systems, and
                modern web platform architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Technical Proficiencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Redux', 'Vue.js'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Backend & Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'AWS', 'REST APIs'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
