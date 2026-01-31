import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Austin<span className="text-primary-600 dark:text-primary-400">.</span>
            </Link>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Full stack engineer in Indianapolis, Indiana &mdash; building refined digital products with precision and purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: '/about', label: 'About' },
                { href: '/portfolio', label: 'Work' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              {[
                { href: 'https://github.com', icon: FaGithub, label: 'GitHub' },
                { href: 'https://linkedin.com', icon: FaLinkedin, label: 'LinkedIn' },
                { href: 'https://twitter.com', icon: FaTwitter, label: 'Twitter' },
                { href: 'mailto:built.to.cell@gmail.com', icon: FaEnvelope, label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-slate-600 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-800">
          <p className="text-center text-xs text-gray-400 dark:text-gray-500 tracking-wide">
            &copy; {currentYear} Austin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
