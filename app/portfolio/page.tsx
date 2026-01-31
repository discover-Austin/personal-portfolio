import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'End-to-end commerce solution featuring Stripe-powered payments, real-time inventory management, and a streamlined order fulfillment pipeline.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Real-time collaborative workspace with live updates via WebSockets, granular permissions, and intuitive drag-and-drop workflow orchestration.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Precision weather intelligence platform delivering real-time conditions, multi-day forecasts, and interactive radar overlays for any location worldwide.',
    technologies: ['React', 'TypeScript', 'Weather API', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'Unified analytics command center for multi-platform social accounts, featuring engagement heatmaps, audience insights, and automated reporting.',
    technologies: ['Next.js', 'Python', 'FastAPI', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'High-performance publishing engine with Markdown authoring, threaded discussions, and built-in SEO optimization for maximum organic reach.',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 6,
    title: 'Portfolio Generator',
    description: 'Developer-focused site builder that transforms configuration into polished, deployment-ready portfolio sites with fully customizable templates.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

export default function Portfolio() {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-widest uppercase text-primary-600 dark:text-primary-400 mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            Selected Work
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A curated selection of projects that reflect my commitment to quality engineering and purposeful design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-800/50 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-slate-700/50 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="relative h-48 bg-gray-100 dark:bg-slate-700 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gray-50 dark:bg-slate-700/50 text-gray-600 dark:text-gray-300 rounded-lg text-xs font-medium border border-gray-100 dark:border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-slate-700/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt size={14} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
