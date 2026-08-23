# 🌌 Atul Kumar Mishra — Modern Interactive Portfolio

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Status-Live%20%26%20Active-brightgreen?style=for-the-badge)
![Next.js 16](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)
![React 19](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js)

<br />

**A state-of-the-art developer portfolio and interactive showcase featuring 3D graphics, physics simulations, Web Audio haptics, and generative AI systems.**

[**Explore Live Demo »**](https://atulllmishra.vercel.app) · [**Report Issue »**](https://github.com/atulllmishra/myportfolio/issues) · [**Download Resume »**](https://atulllmishra.vercel.app/resume.pdf)

</div>

---

## 📖 Overview

This repository houses the personal portfolio, engineering projects, and research showcase of **Atul Kumar Mishra**, a Computer Science & Engineering undergraduate and Full-Stack AI Engineer.

Engineered with **Next.js 16**, **React 19**, **TypeScript**, and **Three.js / React Three Fiber**, this site goes beyond a static resume: it provides a tactile, interactive experience with custom sound synthesis, 2D zero-gravity physics, a global terminal command palette, and production-tested full-stack applications.

---

## ✨ Key Features & Interactive Systems

### 🎮 1. Zero-G Physics Playground (`Matter.js`)
- Interactive 2D physics sandbox simulating floating tech badges in zero gravity.
- Full mouse grab-and-toss constraints with real-time velocity collision sound feedback via Web Audio API.

### ⚡ 2. Terminal Command Palette (`Cmd + K` / `Ctrl + K`)
- Instant keyboard-driven navigation across sections, featured projects, skills, and social links.
- Fuzzy filtering, quick-action chips, and keyboard shortcuts (`G P` for Projects, `G S` for Skills, etc.).

### 🔊 3. Tactile Audio Haptics Engine (`Web Audio API`)
- Zero-dependency client-side procedural sound synthesizer for UI feedback.
- Configurable audio haptics for clicks, modal popups, theme switches, and physics collisions with persistent mute toggle.

### 🌗 4. Dynamic Theme Engine
- Dual aesthetic mode: **Light Peach Studio** and **Dark Cyberpunk / Midnight Blue**.
- Smooth CSS variable transitions without layout shifts.

### 🍎 5. macOS-Inspired Animated Dock & Mobile Bottom Sheet
- Interactive floating desktop dock with magnification physics (`Framer Motion`).
- Touch-optimized slide-up drawer for seamless navigation on mobile devices.

### 📬 6. Production Contact Pipeline
- Direct contact form with custom subject dropdowns and international dial codes.
- Server-side email delivery powered by **Next.js Route Handlers** and **Nodemailer**.

---

## 🚀 Featured Projects

| Project | Category | Highlights & Technology | Status | Live Demo |
| :--- | :--- | :--- | :--- | :--- |
| **heyBuddy** | AI EdTech | Synthesizes localized video and voice explanations in real-time. Scales lecture difficulty via LLMs, TTS models & client-side Canvas APIs. | `Active` | [Demo](https://heybuddyai.vercel.app) |
| **ProcureHub** | Enterprise SaaS | Transparent B2B IT maintenance contract open-bidding platform with subtle crypto sealed bids and smart contract audit trails. | `Production` | [Demo](https://procurehub.vercel.app) |
| **Smart Agri** | Precision Agritech | National Finalist at **IIT Guwahati ImpactHack 2025**. Decision-support PWA cross-referencing microclimate APIs with crop market prediction. | `IIT Finalist` | [Demo](https://smart-agri.vercel.app) |
| **MCAET Campus AI** | Generative AI | Official campus admission enquiry RAG assistant for Mahamaya College (ANDUAT) handling 200+ daily queries. | `Live Campus` | [Demo](https://mcaetchatbot-2.onrender.com) |

---

## 🛠️ Tech Stack & Architecture

### **Frontend & Framework**
- **Core**: [Next.js 16 (App Router)](https://nextjs.org/) + [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Design Tokens
- **Typography**: [Google Poppins Font](https://fonts.google.com/specimen/Poppins) via `next/font`

### **Graphics, Physics & Animation**
- **3D & WebGL**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Physics Engine**: [Matter.js](https://brm.io/matter-js/)
- **Animation**: [Framer Motion 12](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/), [Canvas Confetti](https://github.com/catdad/canvas-confetti)
- **Icons**: [Lucide React](https://lucide.dev/)

### **Backend & Services**
- **Runtime**: Node.js & Next.js Server Actions / Edge Route Handlers
- **Email Service**: [Nodemailer](https://nodemailer.com/) (Gmail SMTP Integration)

---

## 📂 Project Structure

```bash
myportfolio/
├── public/                     # Static assets (favicons, resume.pdf, models)
├── src/
│   ├── app/                    # Next.js 16 App Router
│   │   ├── api/
│   │   │   ├── admin/          # Admin verification routes
│   │   │   └── contact/        # Contact form Nodemailer endpoint
│   │   ├── globals.css         # Tailwind v4 styles & CSS theme variables
│   │   ├── layout.tsx          # Root Layout & Providers
│   │   └── page.tsx            # Main Single Page App Entrypoint
│   ├── components/             # Reusable UI & Interactive Components
│   │   ├── CelestialScene/     # 3D Starfield & WebGL Canvas
│   │   ├── CommandPalette/     # Global Cmd+K Terminal Navigation
│   │   ├── Footer/             # Footer with Live Time, Map & Socials
│   │   ├── Hero3D/             # 3D interactive hero models
│   │   ├── Navbar/             # Desktop Dock & Mobile Slide-Up Drawer
│   │   ├── PhysicsPlayground/  # Matter.js Zero-G Physics Simulation
│   │   ├── ProjectCard/        # 3D Tilt Project Cards & Modal Viewers
│   │   ├── ReactBits/          # Custom micro-animations & magnetic buttons
│   │   └── ThemeProvider/      # Dark / Light Theme Context
│   ├── data/                   # Centralized structured data
│   │   ├── certificationsData.ts
│   │   ├── projectsData.ts
│   │   ├── skillsData.ts
│   │   └── timelineData.ts
│   ├── lib/                    # Utility libraries & Web Audio haptics
│   │   ├── audioHaptics.ts     # Synthesized sound generation
│   │   └── utils.ts            # Class merging (clsx + twMerge)
│   └── sections/               # Page Section Modules
│       ├── About/              # Bio, engineering philosophy & hobbies
│       ├── AIChatbotWidget/    # Virtual AI portfolio assistant
│       ├── Certifications/     # Honors, credentials & hackathons
│       ├── Contact/            # Interactive contact form & details
│       ├── Hero/               # Hero landing with text rotator
│       ├── Projects/           # Filterable projects showcase
│       ├── Skills/             # Categorized technical competencies
│       └── Timeline/           # Journey & experience timeline
├── .env.local.example          # Environment variables template
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration for Tailwind
├── tailwind.config.js          # Tailwind CSS settings
└── tsconfig.json               # TypeScript configuration
```

---

## ⚡ Getting Started

Follow these instructions to clone and run the portfolio locally on your development machine.

### **Prerequisites**
- **Node.js**: `v18.18.0` or later (Node 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### **1. Clone the Repository**
```bash
git clone https://github.com/atulllmishra/myportfolio.git
cd myportfolio
```

### **2. Install Dependencies**
```bash
npm install
# or
pnpm install
# or
yarn install
```

### **3. Configure Environment Variables**
Copy the example environment file and configure your credentials:

```bash
cp .env.local.example .env.local
```

Open `.env.local` and add your email configuration for the contact form:
```env
# Gmail SMTP Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-google-app-password

# Recipient Email for incoming inquiries
CONTACT_RECEIVER_EMAIL=your-email@gmail.com
```

> **Note:** To generate a Google App Password, enable 2-Step Verification on your Google Account and visit [Google App Passwords](https://myaccount.google.com/apppasswords).

### **4. Run the Development Server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the portfolio.

---

## ⌨️ Keyboard Shortcuts & Gestures

| Shortcut | Action |
| :--- | :--- |
| <kbd>Cmd</kbd> + <kbd>K</kbd> / <kbd>Ctrl</kbd> + <kbd>K</kbd> | Toggle Command Palette |
| <kbd>Esc</kbd> | Close Modals / Command Palette / Physics Mode |
| <kbd>↑</kbd> / <kbd>↓</kbd> | Navigate items in Command Palette |
| <kbd>Enter</kbd> | Select active command |

---

## 📦 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run build` | Compiles the production build |
| `npm run start` | Runs the compiled production server |
| `npm run lint` | Runs ESLint to check for syntax and type issues |

---

## 🌐 Contact & Connect

**Atul Kumar Mishra**  
- **Email**: [atulllmishra1@gmail.com](mailto:atulllmishra1@gmail.com)  
- **LinkedIn**: [linkedin.com/in/atul-kumar-mishra-3b3939363](https://www.linkedin.com/in/atul-kumar-mishra-3b3939363)  
- **GitHub**: [@atulllmishra](https://github.com/atulllmishra/)  
- **Instagram**: [@atulllmishra](https://www.instagram.com/atulllmishra/)  
- **Location**: Ayodhya / Jamshedpur, India  

---

<div align="center">

Made with ❤️ by [Atul Kumar Mishra](https://github.com/atulllmishra)

</div>
