# Samuel Aemro - Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Smooth Scrolling**: React Scroll
- **Build Tool**: Vite

## 📋 TODO: Dependencies Installation

**Run these commands when you have a better internet connection:**

```bash
# Install Tailwind CSS and PostCSS
npm install tailwindcss postcss autoprefixer

# Install animation and UI libraries
npm install framer-motion lucide-react

# Install smooth scrolling
npm install react-scroll @types/react-scroll

# Initialize Tailwind CSS
npx tailwindcss init -p
```

## 🎨 Design System

- **Colors**:
  - Primary: Soft lilac and petal blush pink accents
  - Text: Graphite gray on ivory white background
- **Typography**: Clean, modern fonts with Tailwind utilities
- **Layout**: Mobile-first responsive design
- **Animations**: Subtle Framer Motion transitions

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   ├── projects.ts
│   └── skills.ts
├── App.tsx
└── main.tsx
```

## 🔧 Development

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run lint   # Run ESLint
```