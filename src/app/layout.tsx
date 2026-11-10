import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeTransition from "@/components/theme/ThemeTransition";

const inter = Inter({ subsets: ["latin"] });

const ThreeBackground = dynamic(
  () => import("@/components/canvas/ThreeBackground"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Muhammad Hamza Saleem | Senior React Native & Full-Stack Developer",
  description:
    "Portfolio of Muhammad Hamza Saleem, Senior React Native & Full-Stack Developer specializing in mobile architecture, high-performance iOS/Android apps, and modern web applications.",
  keywords: [
    "Muhammad Hamza Saleem",
    "React Native",
    "Full-Stack Developer",
    "Mobile Developer",
    "TypeScript",
    "Next.js",
    "Three.js",
    "Karachi",
    "Zenkoders",
  ],
  authors: [{ name: "Muhammad Hamza Saleem" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('portfolio-theme');
                  if (storedTheme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.documentElement.style.colorScheme = 'light';
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 antialiased selection:bg-cyan-500 selection:text-white dark:selection:text-slate-950 transition-colors duration-300`}
      >
        <ThemeProvider>
          <ThemeTransition />
          <ThreeBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
