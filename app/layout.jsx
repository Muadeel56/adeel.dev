import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import PaletteSwitcher from "../components/common/PaletteSwitcher";
import NavBar from "../components/common/NavBar";
import ThemeToggle from "../components/common/ThemeToggle";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import LanguageSwitcher from "../components/common/LanguageSwitcher";

// Configure Space Grotesk font for the Nebula Bloom theme
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Muhammad Adeel | Frontend & Full Stack Developer",
  description: "Passionate developer specializing in React, Next.js, and modern web technologies. Building beautiful, fast, and user-focused applications.",
  keywords: ["developer", "portfolio", "next.js", "react", "typescript", "tailwind", "frontend", "full stack", "web development"],
  authors: [{ name: "Muhammad Adeel" }],
  creator: "Muhammad Adeel",
  publisher: "Muhammad Adeel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://adeel-portfolio.pages.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Muhammad Adeel | Frontend & Full Stack Developer",
    description: "Passionate developer specializing in React, Next.js, and modern web technologies.",
    url: 'https://adeel-portfolio.pages.dev',
    siteName: 'Adeel Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Adeel - Frontend & Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Muhammad Adeel | Frontend & Full Stack Developer",
    description: "Passionate developer specializing in React, Next.js, and modern web technologies.",
    images: ['/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muhammad Adeel",
              "jobTitle": "Frontend & Full Stack Developer",
              "url": "https://adeel-portfolio.pages.dev",
              "sameAs": [
                "https://github.com/Muadeel56",
                "https://www.linkedin.com/in/muhammad-adeel-b7224a319/"
              ],
              "image": "/profile.jpg",
              "description": "Passionate developer specializing in React, Next.js, and modern web technologies.",
              "knowsAbout": [
                "React", "Next.js", "TypeScript", "JavaScript", "Django", 
                "Tailwind CSS", "REST APIs", "Git", "Figma", "Framer Motion"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "QTO House"
              }
            })
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <NavBar />
          <ThemeToggle />
          {children}
          <PaletteSwitcher />
          <LanguageSwitcher />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
} 