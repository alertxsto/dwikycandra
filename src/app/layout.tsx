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
    default: "Dwiky Candra: Systems Builder & Product Engineer",
    template: "%s | Dwiky Candra",
  },
  description:
    "Official portfolio of Dwiky Candra (@alertxsto). A systems builder creating products, data tools, interfaces, and operational software that make complex work clearer.",
  keywords: [
    "Dwiky Candra",
    "Dwiky",
    "Candra",
    "alertxsto",
    "Systems Builder",
    "Product Engineer Indonesia",
    "Luminary Memory",
    "Knowledge Systems",
    "ZeroCode",
    "KyDev",
    "DistroWar",
    "Syncology",
    "FisaJaya",
    "Kasir Pintar",
    "Jakarta Waste Intelligence System",
    "Waste Computer Vision",
    "openSUSE Tumbleweed",
    "Systems Design",
    "Data Pipelines",
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Dwiky Candra: Systems Builder & Product Engineer",
    description:
      "Official portfolio of Dwiky Candra (@alertxsto). Building systems, products, data tools, and interfaces that make complex work clearer.",
    url: "https://dwikycandra.vercel.app",
    siteName: "Dwiky Candra Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dwiky Candra: Systems Builder and Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwiky Candra: Systems Builder & Product Engineer",
    description:
      "Official portfolio of Dwiky Candra (@alertxsto). Building systems, products, data tools, and interfaces that make complex work clearer.",
    creator: "@alertxsto",
    images: ["/opengraph-image"],
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

const projectStructuredData = [
  {
    name: "JWIS",
    url: "https://github.com/alertxsto/jwis-system",
    description:
      "Jakarta Waste Intelligence System case for Dinas Lingkungan Hidup DKI Jakarta, covering fleet supervision, forecasting, and field dispatch.",
  },
  {
    name: "FisaJaya",
    url: "https://www.fisajaya.com/",
    description:
      "Service-led website for custom material-handling design and fabrication.",
  },
  {
    name: "Luminary Memory",
    url: "https://github.com/alertxsto/luminary-memory",
    description:
      "Scope-aware, evidence-backed self-hosted memory and retrieval infrastructure for AI agents with a first-class Hermes Agent provider.",
  },
  {
    name: "ZeroCode",
    url: "https://www.zerocode.web.id/",
    description:
      "Browser-based coding academy with an executable learning environment.",
  },
  {
    name: "Kasir Pintar",
    url: "https://github.com/alertxsto/warung-app",
    description: "Offline-first point-of-sale system for small shops.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://dwikycandra.vercel.app/#person",
      name: "Dwiky Candra",
      alternateName: ["alertxsto", "Dwiky"],
      url: "https://dwikycandra.vercel.app",
      jobTitle: "Systems Builder & Product Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Independent Open Source Creator",
      },
      sameAs: [
        "https://github.com/alertxsto",
        "https://linkedin.com/in/dwiky-candra",
        "https://instagram.com/dky_cdr",
      ],
      knowsAbout: [
        "Systems Design",
        "Luminary Memory",
        "Product Engineering",
        "Operational Software",
        "FastEmbed ONNX",
        "Retrieval-Augmented Generation",
        "Data Systems",
        "Infrastructure",
        "Python",
        "TypeScript",
        "Next.js",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://dwikycandra.vercel.app/#website",
      url: "https://dwikycandra.vercel.app",
      name: "Dwiky Candra's Portfolio",
      publisher: {
        "@id": "https://dwikycandra.vercel.app/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://dwikycandra.vercel.app/#profile",
      url: "https://dwikycandra.vercel.app",
      name: "Dwiky Candra profile",
      mainEntity: {
        "@id": "https://dwikycandra.vercel.app/#person",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://dwikycandra.vercel.app/#projects",
      name: "Selected projects by Dwiky Candra",
      itemListElement: projectStructuredData.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.name,
          url: project.url,
          description: project.description,
          creator: {
            "@id": "https://dwikycandra.vercel.app/#person",
          },
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
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
