# Yousif Salman - Portfolio Website

A modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- ✨ Interactive canvas animation that follows mouse/touch movements
- 🎨 Modern UI with shadcn/ui components
- 📱 Fully responsive design
- ⚡ Built with Next.js 16 and React 19
- 🎯 TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── components/
│   └── ui/
│       ├── button.tsx    # Button component from shadcn/ui
│       ├── canvas.tsx    # Canvas animation component
│       └── hero.tsx      # Hero section component
├── lib/
│   └── utils.ts          # Utility functions (cn helper)
└── public/               # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **lucide-react** - Icons
- **Radix UI** - Accessible component primitives

## Customization

The hero component displays "Yousif Salman" and "AI Developer". You can customize:
- Text content in `components/ui/hero.tsx`
- Colors in `app/globals.css` (CSS variables)
- Canvas animation settings in `components/ui/canvas.tsx`

## License

ISC

