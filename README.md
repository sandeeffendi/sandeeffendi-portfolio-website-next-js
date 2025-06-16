# My Personal Portfolio Website

This is my personal portfolio website built using **Next.js** and **Tailwind CSS**. It showcases my profile, skills, and selected projects in a clean, responsive layout. The website is designed to provide visitors with insight into my work as a developer and designer.

🔗 **Live Demo**: [sandeeffendi-portfolio-website-next.vercel.app](https://sandeeffendi-portfolio-website-next.vercel.app/)

---

## ⚙️ Tech Stack

**Framework & Core**
- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)

**Styling**
- [Tailwind CSS 4](https://tailwindcss.com/)
- [tailwindcss-animate](https://github.com/benface/tailwindcss-animate)
- [tw-animate-css](https://www.npmjs.com/package/tw-animate-css)

**UI & Utility Libraries**
- [ShadCN UI (via `@radix-ui/react-slot`)](https://www.radix-ui.com/)
- [Lucide React Icons](https://lucide.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [clsx](https://www.npmjs.com/package/clsx)
- [class-variance-authority](https://www.npmjs.com/package/class-variance-authority)
- [tailwind-merge](https://tailwind-merge.vercel.app/)

**Tooling & Dev Dependencies**
- ESLint 9
- Type Definitions for React and Node
- PostCSS (via Tailwind plugin)
- Git & GitHub for version control
- Deployed with [Vercel](https://vercel.com)

---

## 💡 Features

- **Hero Section**: Introduction and call-to-action  
- **About Section**: Short bio and background  
- **Projects Section**: Highlighted projects with images  
- **Contact Section**: Contact information and a form (currently non-functional)  
- Fully responsive design using Tailwind CSS

---

## 🔧 Development Process

1. Created a simple wireframe: layout, typography, and color palette.
2. Wrote content and structured the sections.
3. Prepared necessary assets: icons and project images.
4. Set up the project using selected tech stack and dependencies.
5. Built the layout and interactivity.
6. Integrated version control via Git and GitHub.
7. Deployed using Vercel.

---

## 🧪 Evaluation & Improvements

### ❌ Current Limitations
- No structured unit testing, risking undetected bugs.
- Contact form lacks a backend handler; messages cannot be sent.
- Navigation bar lacks a hamburger menu, making it less mobile-friendly.

### ✅ Planned Improvements
- Add **unit testing** using [Bun](https://bun.sh) to improve reliability.
- Integrate a **backend handler** with **NodeMailer** for the contact form.
- Add a **hamburger menu** to improve navigation on mobile devices.

---

## 📦 Getting Started

To run this project locally:

```bash
git clone https://github.com/sandeeffendi/sandeeffendi-portfolio-website-next-js.git
cd your-repo-name
npm install
npm run dev
