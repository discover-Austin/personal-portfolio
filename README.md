# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features include a home page, about page, portfolio showcase, blog with Markdown support, contact form, and dark/light mode toggle.

## Features

- 🎨 **Modern Design** - Clean and professional UI with Tailwind CSS
- 🌓 **Dark/Light Mode** - Toggle between themes with persistent preferences
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 📝 **Blog System** - Markdown-based blog with syntax highlighting
- 💼 **Portfolio Showcase** - Display your projects with details
- 📧 **Contact Form** - Functional contact form with validation
- ⚡ **Fast Performance** - Built with Next.js 14 for optimal speed
- 🔍 **SEO Friendly** - Optimized for search engines
- 🎯 **TypeScript** - Type-safe code for better development experience

## Pages

- **Home** - Hero section with introduction and CTA buttons
- **About** - Personal background, skills, and experience
- **Portfolio** - Showcase of projects with technologies used
- **Blog** - Articles and tutorials with Markdown support
- **Contact** - Contact form and contact information

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Markdown:** Gray Matter + Marked
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/discover-Austin/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
personal-portfolio/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing and posts
│   │   └── [slug]/        # Dynamic blog post pages
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio showcase
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with navbar/footer
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Footer.tsx         # Footer component
│   ├── Navbar.tsx         # Navigation bar
│   └── ThemeProvider.tsx  # Dark/light mode provider
├── content/              # Content files
│   └── blog/             # Markdown blog posts
├── lib/                  # Utility functions
│   └── blog.ts           # Blog post utilities
├── pages/                # Pages Router (for API routes)
│   └── api/              # API routes
│       └── contact.ts    # Contact form endpoint
├── public/               # Static files
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Customization

### Personal Information

1. **Update content in pages:**
   - Edit `app/page.tsx` for home page content
   - Edit `app/about/page.tsx` for your bio and experience
   - Edit `app/portfolio/page.tsx` to add your projects
   - Edit `app/contact/page.tsx` for contact details

2. **Add blog posts:**
   - Create new `.md` files in `content/blog/`
   - Use the existing posts as templates
   - Include frontmatter with title, date, excerpt, author, and tags

3. **Update social links:**
   - Edit links in `components/Footer.tsx`
   - Edit links in `app/page.tsx`

4. **Customize colors:**
   - Edit `tailwind.config.js` to change the color scheme
   - Modify the `primary` color palette to match your brand

### Contact Form

The contact form currently logs submissions to the console. To make it fully functional:

1. **Add an email service:**
   - Install a service like SendGrid, Mailgun, or Resend
   - Update `pages/api/contact.ts` to send emails

2. **Or save to a database:**
   - Set up a database (PostgreSQL, MongoDB, etc.)
   - Update the API route to save submissions

## Building for Production

Build the application:
```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:
```bash
npm start
# or
yarn start
# or
pnpm start
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be deployed with a production URL

### Other Platforms

You can also deploy to:
- **Netlify:** Use the Next.js plugin
- **AWS Amplify:** Connect your GitHub repository
- **Docker:** Use the included Dockerfile configuration

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Add your environment variables here
# Example for email service:
# SENDGRID_API_KEY=your_api_key
# EMAIL_FROM=your@email.com
```

## License

MIT License

## Built With

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

Made with ❤️ by Austin
