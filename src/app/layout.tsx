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
  title: "DWIKY CANDRA — Agentic AI Engineer × Linux Engineer",
  description:
    "Portfolio of Dwiky Candra. Building agentic AI systems (Hermes, LangChain, RAG) and shipping from openSUSE Tumbleweed. Big type, bigger ideas.",
  keywords: [
    "agentic AI",
    "AI engineer",
    "Hermes agent",
    "LangChain",
    "Linux",
    "openSUSE Tumbleweed",
    "full-stack developer",
    "Dwiky Candra",
  ],
  authors: [{ name: "Dwiky Candra" }],
  openGraph: {
    title: "DWIKY CANDRA — Agentic AI Engineer × Linux Engineer",
    description: "Agentic AI from a Tumbleweed terminal. Big type, bigger ideas.",
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
