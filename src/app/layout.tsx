import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

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
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950`}>
        <ThreeBackground />
        {children}
      </body>
    </html>
  );
}
