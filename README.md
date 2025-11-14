# Neo-Brutalist Portfolio

A modern, bold portfolio website built with React, TypeScript, and Tailwind CSS, featuring a distinctive neo-brutalist design aesthetic.

## 🎨 Features

- **Neo-Brutalist Design** - Bold borders, vibrant colors, and strong shadows
- **Fully Responsive** - Optimized for all screen sizes
- **Smooth Animations** - Scroll-triggered animations for enhanced user experience
- **Interactive Components** - Expandable experience cards with smooth transitions
- **Modern Tech Stack** - React 19, TypeScript, Vite, Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/NicolasKocher/neobrutalist-portfolio.git
cd neobrutalist-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

Preview the production build:

```bash
npm run preview
```

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## 📁 Project Structure

```
neobrutalist-portfolio/
├── components/
│   ├── AnimatedSection.tsx
│   ├── Card.tsx
│   ├── ExperienceCard.tsx
│   ├── Header.tsx
│   └── Marquee.tsx
├── hooks/
│   └── useOnScreen.ts
├── public/
│   └── logos/
│       └── [company logos]
├── App.tsx
├── index.tsx
└── vite.config.ts
```

## 🎯 Sections

- **Hero** - Introduction and current role
- **About** - Personal background and interests
- **Experience** - Work history with company logos
- **Skills** - Technical skills and technologies
- **Education** - Academic background
- **Contact** - Social links and email

## 📝 Customization

To customize the portfolio with your own information:

1. Edit `App.tsx` to update:

   - `experienceData` - Your work experience
   - `educationData` - Your education
   - `skills` - Your skills array

2. Add company logos to `public/logos/` and reference them in the experience data

3. Update contact links in the footer section

## 📄 License

This project is private and personal.

## 👤 Author

**Nicolas Kocher**

- LinkedIn: [@nicolaskocher](https://www.linkedin.com/in/nicolaskocher/)
- GitHub: [@NicolasKocher](https://github.com/NicolasKocher)
- Email: nicokocher1999@gmail.com
