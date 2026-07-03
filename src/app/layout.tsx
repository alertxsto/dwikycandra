import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RANGGA PRATAMA — Creative Developer & Designer",
  description:
    "Portfolio of Rangga Pratama, a creative developer & designer crafting bold, interactive digital experiences. Big type, bigger ideas.",
  keywords: [
    "creative developer",
    "portfolio",
    "interactive design",
    "frontend",
    "UI/UX",
    "Rangga Pratama",
  ],
  authors: [{ name: "Rangga Pratama" }],
  openGraph: {
    title: "RANGGA PRATAMA — Creative Developer & Designer",
    description: "Big type, bigger ideas. Interactive portfolio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
