# Afnan.dev - Professional Web Developer Portfolio & Studio

Aptech Certified Professional Web Developer & Full-Stack Solutions Architect.

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm** or **yarn** or **pnpm** or **bun**

### 2. Installation
Open terminal inside the extracted project folder and run:

```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` or `http://localhost:5173`.

### 4. Build for Production
To generate the optimized production static files:

```bash
npm run build
```
The output will be in the `/dist` directory, ready to deploy to any hosting provider.

---

## 🌐 Free One-Click Deployment Options

### Deploy on Vercel
1. Push this project to your GitHub account (`git push origin main`).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository.
4. Click **"Deploy"** (Vercel automatically detects Vite/React).

### Deploy on Netlify
1. Go to [netlify.com](https://netlify.com).
2. Drag and drop the `dist/` folder into the Netlify dashboard, or connect your GitHub repository.
3. Build command: `npm run build`
4. Publish directory: `dist`

---

## 📁 Project Architecture & Key Files

- `/src/App.tsx` — Main application layout, view switching (Public Website <-> Studio Board), and modals.
- `/src/context/AppContext.tsx` — Central state management (Authentication, Videos, Projects, Aptech credentials, SEO settings, LocalStorage persistence).
- `/src/components/Header.tsx` — Responsive navigation bar, Brand title, and Sign In trigger.
- `/src/components/HeroBannerSection.tsx` — Interactive signature banner carousel.
- `/src/components/AptechDiplomaSection.tsx` — Aptech diploma credentials and coursework showcase.
- `/src/components/VideoGallerySection.tsx` — Video showcase gallery, HD player modal, and Live Code & UI simulator.
- `/src/components/DashboardView.tsx` — Creator dashboard for video uploads, SEO management, and project CMS.
- `/src/components/BannerGallerySection.tsx` — 8K banner asset gallery with full-res lightbox viewer.
- `/src/components/ServicesSection.tsx` — Core services: Website Development, Custom Web Solutions, Website Maintenance.
- `/src/components/PerformanceAuditSection.tsx` — Core Web Vitals speed & SEO audit simulator.
- `/src/components/ProjectEstimator.tsx` — Interactive cost and timeline calculator.
- `/src/components/ProjectsSection.tsx` — Case studies and portfolio projects.
- `/src/components/ContactSection.tsx` — Proposal form and direct WhatsApp / Email connections.
- `/public/assets/aistudio/` — Official Aptech banners and high-resolution media assets.

---

## 🎓 Aptech Certified Web Developer
Developed by **Afnan** (Aptech Computer Education Graduate).
- Email: `aptechafnan1@gmail.com`
- WhatsApp: `+92 300 1234567`
