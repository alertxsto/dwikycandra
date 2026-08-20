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
  metadataBase: new URL("https://dwikycandra.vercel.app"),
  title: {
    default: "Dwiky Candra - Agentic AI Engineer & Linux Developer",
    template: "%s | Dwiky Candra",
  },
  description:
    "Official portfolio of Dwiky Candra (@alertxsto). Agentic AI Engineer, Linux Systems Builder, and creator of Luminary Memory, ZeroCode, KyDev, DistroWar, and Syncology. Shipping autonomous agents from openSUSE Tumbleweed.",
  keywords: [
    "Dwiky Candra",
    "Dwiky",
    "Candra",
    "alertxsto",
    "Agentic AI Engineer",
    "AI Engineer Indonesia",
    "Luminary Memory",
    "Hermes Agent Memory",
    "ZeroCode",
    "KyDev",
    "DistroWar",
    "Syncology",
    "openSUSE Tumbleweed",
    "Linux Systems Developer",
    "RAG Pipelines",
    "FastEmbed ONNX",
    "Full Stack Developer",
    "Autonomous Agents",
    "Python AI Developer",
  ],
  authors: [{ name: "Dwiky Candra", url: "https://github.com/alertxsto" }],
  creator: "Dwiky Candra",
  publisher: "Dwiky Candra",
  alternates: {
    canonical: "https://dwikycandra.vercel.app",
  },
  openGraph: {
    title: "Dwiky Candra - Agentic AI Engineer & Linux Developer",
    description:
      "Official portfolio of Dwiky Candra (@alertxsto). Building agentic AI systems, Linux tools, and autonomous agent memory.",
    url: "https://dwikycandra.vercel.app",
    siteName: "Dwiky Candra Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwiky Candra - Agentic AI Engineer & Linux Developer",
    description:
      "Official portfolio of Dwiky Candra (@alertxsto). Building agentic AI systems, Linux tools, and autonomous agent memory.",
    creator: "@alertxsto",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://dwikycandra.vercel.app/#person",
      "name": "Dwiky Candra",
      "alternateName": ["alertxsto", "Dwiky"],
      "url": "https://dwikycandra.vercel.app",
      "jobTitle": "Agentic AI Engineer & Linux Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Independent Open Source Creator",
      },
      "sameAs": [
        "https://github.com/alertxsto",
        "https://linkedin.com/in/dwiky-candra",
        "https://instagram.com/dky_cdr",
      ],
      "knowsAbout": [
        "Agentic AI",
        "Luminary Memory",
        "Autonomous Agents",
        "Hermes Agent",
        "FastEmbed ONNX",
        "Retrieval-Augmented Generation",
        "Linux Systems",
        "openSUSE Tumbleweed",
        "Python",
        "TypeScript",
        "Next.js",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://dwikycandra.vercel.app/#website",
      "url": "https://dwikycandra.vercel.app",
      "name": "Dwiky Candra - Portfolio",
      "publisher": {
        "@id": "https://dwikycandra.vercel.app/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
