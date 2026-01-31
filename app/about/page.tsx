import { FaCode, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa'

export default function About() {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-widest uppercase text-primary-600 dark:text-primary-400 mb-3">
            Background
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            About Me
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Engineering robust solutions at the intersection of design and performance
          </p>
        </div>

        {/* Bio Section */}
        <div className="mb-24">
          <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 dark:border-slate-700/50">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
              Hello &mdash; I&apos;m Austin
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I&apos;m a full-stack engineer based in Indianapolis, Indiana, focused on
                building refined, high-performance digital products. Over several years in
                the industry, I&apos;ve delivered everything from lean startup MVPs to
                enterprise-grade platforms &mdash; each held to the same exacting standard.
              </p>
              <p>
                My foundation is rooted in modern JavaScript and TypeScript ecosystems
                &mdash; React, Next.js, and Node.js form my primary toolkit. I stay
                deliberately current with emerging technologies, but I never chase trends
                at the expense of reliability. The right tool for the right problem, every time.
              </p>
              <p>
                Beyond the editor, I invest my time in open-source contribution, technical
                writing, and mentorship &mdash; because the best engineers lift others as
                they climb.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <p className="text-sm font-medium tracking-widest uppercase text-primary-600 dark:text-primary-400 text-center mb-3">
            How I Work
          </p>
          <h2 className="text-3xl font-bold text-center mb-14 text-gray-900 dark:text-white tracking-tight">
            Guiding Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FaCode,
                title: 'Craftsmanship',
                description: 'Code should be intentional, readable, and built to endure — never just to ship',
              },
              {
                icon: FaLightbulb,
                title: 'Innovation',
                description: 'Leveraging cutting-edge approaches to solve real problems, not hypothetical ones',
              },
              {
                icon: FaRocket,
                title: 'Performance',
                description: 'Every millisecond matters — I optimize relentlessly so users never have to wait',
              },
              {
                icon: FaUsers,
                title: 'Collaboration',
                description: 'The strongest products emerge from aligned teams with shared ownership',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="group bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700/50 text-center transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-5 transition-transform group-hover:scale-110">
                  <value.icon size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-24">
          <p className="text-sm font-medium tracking-widest uppercase text-primary-600 dark:text-primary-400 text-center mb-3">
            Career
          </p>
          <h2 className="text-3xl font-bold text-center mb-14 text-gray-900 dark:text-white tracking-tight">
            Experience &amp; Education
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-400 via-primary-300 to-transparent dark:from-primary-500 dark:via-primary-700 dark:to-transparent" />

            <div className="space-y-8">
              {[
                {
                  title: 'Senior Full Stack Developer',
                  org: 'Tech Company',
                  period: '2021 — Present',
                  description: 'Spearheading the architecture and delivery of scalable web applications using React, Next.js, and Node.js. Establishing engineering standards, leading code reviews, and mentoring developers across the organization.',
                },
                {
                  title: 'Full Stack Developer',
                  org: 'Digital Agency',
                  period: '2019 — 2021',
                  description: 'Delivered end-to-end solutions for a diverse client portfolio, specializing in responsive interfaces and performance-tuned backends using modern web technologies.',
                },
                {
                  title: 'Bachelor of Computer Science',
                  org: 'University',
                  period: '2015 — 2019',
                  description: 'Concentrated in software engineering, distributed systems, and modern web platform architecture.',
                },
              ].map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-20">
                  <div className="absolute left-0 md:left-8 top-2 w-2.5 h-2.5 rounded-full bg-primary-500 dark:bg-primary-400 ring-4 ring-white dark:ring-slate-900 -translate-x-1" />
                  <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700/50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <span className="text-xs font-medium tracking-wider uppercase text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full w-fit">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                      {item.org}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-primary-600 dark:text-primary-400 text-center mb-3">
            Toolkit
          </p>
          <h2 className="text-3xl font-bold text-center mb-14 text-gray-900 dark:text-white tracking-tight">
            Technical Proficiencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700/50">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Redux', 'Vue.js'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-50 dark:bg-slate-700/50 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-100 dark:border-slate-600/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700/50">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4">
                Backend &amp; Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'AWS', 'REST APIs'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-50 dark:bg-slate-700/50 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-100 dark:border-slate-600/50"
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
