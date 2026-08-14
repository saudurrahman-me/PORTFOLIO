# Saud Ur Rahman — Professional Portfolio

This is a premium, modern, and professional portfolio built with Next.js, TypeScript, and Tailwind CSS. It is designed to showcase skills, experience, and projects for early-career Software Engineering roles.

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Guide

- **Site Configuration & Links**: Update your email, location, GitHub, and LinkedIn URLs in `src/data/config.ts`.
- **Projects**: Add, remove, or modify your featured projects in `src/data/projects.ts`. The UI automatically updates based on this file.
- **Resume**: Replace `public/Saud_Ur_Rahman_Resume.pdf` with your actual resume PDF. Keep the exact filename so the download links continue to work.
- **Profile Image**: Replace `public/profile.svg` (or add `public/profile.jpg`) with your professional portrait. If using a `.jpg` or `.png`, update the image `src` in `src/components/Hero.tsx`.
- **Colors & Theming**: Change your core design colors in `src/app/globals.css`.

## Deployment

This portfolio is fully optimized and ready to be deployed on **Vercel** (Recommended).

1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com).
3. Click **Add New** > **Project** and import your GitHub repository.
4. Leave all build settings as default (Framework Preset: Next.js).
5. Click **Deploy**.

## Performance & SEO

- The site uses modern Next.js 15 features including React Server Components.
- Built-in Open Graph metadata for rich social media sharing (specifically tailored for LinkedIn). Update the preview image by replacing `public/og-image.jpg`.
- Optimized image loading and responsive design across all devices.
