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
            Passionate about creating elegant solutions to complex problems
          </p>
        </div>

        {/* Bio Section */}
        <div className="mb-16 bg-white dark:bg-slate-800 rounded-lg p-8 shadow-md border border-gray-200 dark:border-slate-700">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Hello! I&apos;m Austin
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I&apos;m a full-stack developer with a passion for building beautiful, 
              functional, and user-centered digital experiences. With several years 
              of experience in web development, I&apos;ve worked on a diverse range of 
              projects from small business websites to large-scale web applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              My journey in tech started with a curiosity about how things work, 
              which led me to explore programming and web development. Today, I 
              specialize in modern JavaScript frameworks, with expertise in React, 
              Next.js, and Node.js, always staying up-to-date with the latest 
              technologies and best practices.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I&apos;m not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing my knowledge through 
              technical writing and mentoring.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            What I Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 text-center">
              <div className="text-primary-600 dark:text-primary-400 flex justify-center mb-4">
                <FaCode size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Clean Code
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Writing maintainable, well-documented code that stands the test of time
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
                Embracing new technologies and creative approaches to problem-solving
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
                Optimizing for speed and efficiency to deliver the best user experience
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
                Working together with teams to achieve amazing results
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
              <p className="text-gray-600 dark:text-gray-400 mb-2">Tech Company • 2021 - Present</p>
              <p className="text-gray-700 dark:text-gray-300">
                Leading development of scalable web applications using React, Next.js, and Node.js. 
                Mentoring junior developers and establishing best practices for the team.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-l-4 border-primary-600 dark:border-primary-400">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Full Stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Digital Agency • 2019 - 2021</p>
              <p className="text-gray-700 dark:text-gray-300">
                Developed and maintained multiple client projects, focusing on responsive design 
                and modern web technologies.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-l-4 border-primary-600 dark:border-primary-400">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Bachelor of Computer Science
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">University • 2015 - 2019</p>
              <p className="text-gray-700 dark:text-gray-300">
                Focused on software engineering, web technologies, and computer systems.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Technical Skills
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
                Backend & Tools
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
