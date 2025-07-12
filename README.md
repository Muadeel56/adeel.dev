# Adeel Portfolio - Nebula Bloom Theme

A modern, animated developer portfolio built with Next.js 14, Tailwind CSS v4, and Framer Motion. Features a unique "Nebula Bloom" theme system with dark/light mode support.

## 🎨 Nebula Bloom Theme System

### Color Palette

The theme uses HSL color variables for consistent theming:

**Light Mode:**
- `--bg`: Pure white background
- `--surface`: Subtle off-white surface
- `--text-primary`: Deep charcoal text
- `--text-secondary`: Muted gray text
- `--accent-a`: Vibrant Fuchsia
- `--accent-b`: Aurora Green
- `--accent-faded`: Soft fuchsia tint
- `--border`: Light gray borders
- `--elevate`: Subtle elevation shadow

**Dark Mode:**
- `--bg`: Deep space background
- `--surface`: Elevated surface
- `--text-primary`: Pure white text
- `--text-secondary`: Soft gray text
- `--accent-a`: Brighter Fuchsia
- `--accent-b`: Brighter Aurora Green
- `--accent-faded`: Dark fuchsia tint
- `--border`: Dark borders
- `--elevate`: Stronger elevation

### Usage

Use Tailwind classes with the theme variables:

```jsx
// Background colors
className="bg-bg"           // Main background
className="bg-surface"      // Surface background
className="bg-accent-a"     // Fuchsia accent
className="bg-accent-b"     // Aurora Green accent

// Text colors
className="text-text-primary"    // Primary text
className="text-text-secondary"  // Secondary text
className="text-accent-a"        // Fuchsia text
className="text-accent-b"        // Aurora Green text

// Borders and shadows
className="border border-border"     // Border
className="shadow-elevate"           // Elevation shadow
```

## 🚀 Features

- **Nebula Bloom Theme**: Custom color palette with dark/light mode
- **Space Grotesk Font**: Modern, geometric font from Google Fonts
- **Framer Motion**: Smooth animations and micro-interactions
- **Theme Toggle**: Animated sun/moon toggle with smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript Ready**: Full TypeScript support (optional)

## 🛠️ Tech Stack

- **Next.js 14**: App Router for modern React development
- **Tailwind CSS v4**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **next-themes**: Dark/light mode support
- **Space Grotesk**: Google Font for typography

## 📁 Project Structure

```
├── app/
│   ├── layout.jsx          # Root layout with theme provider
│   ├── page.jsx            # Home page with hero section
│   └── globals.css         # Nebula Bloom theme variables
├── components/
│   └── common/
│       ├── Button.jsx      # Reusable button component
│       └── ThemeToggle.jsx # Animated theme toggle
└── package.json
```

## 🎯 Components

### Button Component

Reusable button with multiple variants:

```jsx
<Button variant="primary" size="lg">
  View My Work
</Button>

<Button variant="secondary" size="md">
  Get In Touch
</Button>
```

Variants: `primary`, `secondary`, `ghost`, `outline`
Sizes: `sm`, `md`, `lg`

### ThemeToggle Component

Animated theme toggle with smooth transitions:

```jsx
<ThemeToggle />
```

## 🎨 Animation Features

- **Staggered Entrance**: Elements animate in sequence
- **Gradient Text**: Animated gradient headlines
- **Hover Effects**: Subtle scale and color transitions
- **Scroll Animations**: Elements animate on scroll
- **Background Orbs**: Floating gradient orbs for depth

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Adding New Colors

Add new HSL variables to `globals.css`:

```css
:root {
  --your-color: 200 100% 50%; /* Light mode */
}

.dark {
  --your-color: 200 100% 60%; /* Dark mode */
}
```

### Creating New Components

Follow the pattern in `components/common/`:

```jsx
import { motion } from "framer-motion";

const YourComponent = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-surface border border-border rounded-xl"
    >
      {children}
    </motion.div>
  );
};
```

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Flexible grid systems
- Adaptive typography
- Touch-friendly interactions

## 🌟 Performance

- Optimized images and fonts
- Lazy loading for animations
- Efficient CSS with Tailwind
- Minimal JavaScript bundle

---

Built with ❤️ using the Nebula Bloom theme system
