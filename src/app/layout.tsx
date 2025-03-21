// filepath: c:\Users\USER\Desktop\wiki-search\src\app\layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wiki-Search - Find Information Quickly",
  description:
    "Wiki-Search is a powerful tool to search and find information efficiently.",
  keywords: ["Wiki-Search", "Search Engine", "Information", "Knowledge"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/OSEYI.png" type="image/png" />

        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content="Wiki-Search - Find Information Quickly"
        />
        <meta
          property="og:description"
          content="Wiki-Search is a powerful tool to search and find information efficiently."
        />
        <meta property="og:image" content="/example-og-image.jpg" />
        <meta
          property="og:url"
          content="https://wikisearchbyloseyi.netlify.app"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Wiki-Search - Find Information Quickly"
        />
        <meta
          name="twitter:description"
          content="Wiki-Search is a powerful tool to search and find information efficiently."
        />
        <meta name="twitter:image" content="/example-og-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://wikisearchbyloseyi.netlify.app" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Wiki-Search",
              url: "https://wikisearchbyloseyi.netlify.app",
              description:
                "Wiki-Search is a powerful tool to search and find information efficiently.",
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
