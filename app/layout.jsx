import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import PaletteSwitcher from "../components/common/PaletteSwitcher";
import NavBar from "../components/common/NavBar";
import ThemeToggle from "../components/common/ThemeToggle";
import ScrollToTopButton from "../components/common/ScrollToTopButton";

// Configure Space Grotesk font for the Nebula Bloom theme
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Adeel Portfolio | Developer & Designer",
  description: "Full-stack developer passionate about creating beautiful, functional web experiences with modern technologies.",
  keywords: ["developer", "portfolio", "next.js", "react", "typescript", "tailwind"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
} 