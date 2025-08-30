import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Kenesis & Tech | Software, AI & Web Solutions",
  description:
    "Kenesis & Tech provides cutting-edge software development, AI solutions, and web technologies to help ambitious brands worldwide innovate and grow.",
  keywords: [
    "Kenesis & Tech",
    "Kenesis",
    "software development",
    "AI solutions",
    "web development",
    "IT services Pakistan",
    "technology company",
  ],
  authors: [{ name: "Kenesis & Tech" }],
  robots: "index, follow",
  metadataBase: new URL("https://kenesisntech.vercel.app"),

  // Open Graph
  openGraph: {
    title: "Kenesis & Tech | Software, AI & Web Solutions",
    description:
      "Kenesis & Tech specializes in building scalable software, AI tools, and modern web platforms for businesses worldwide.",
    url: "https://kenesisntech.vercel.app/",
    siteName: "Kenesis & Tech",
    images: [
      {
        url: "/images/og-image.png", // Add this image in your public/images folder
        width: 1200,
        height: 630,
        alt: "Kenesis & Tech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Kenesis & Tech | Software, AI & Web Solutions",
    description:
      "Kenesis & Tech provides software, AI, and web solutions tailored for modern businesses.",
    images: ["/images/og-image.png"],
    creator: "@kenesisntech", // add your Twitter handle if available
  },

  // Icons
  icons: {
    icon: "/images/KnT-Logo.png",
    shortcut: "/images/KnT-Logo.png",
    apple: "/images/KnT-Logo.png",
  },

  // Canonical
  alternates: {
    canonical: "https://kenesisntech.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="font-poppins overflow-x-hidden text-white bg-black cursor-none">
        {children}

        {/* JSON-LD Schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kenesis & Tech",
              url: "https://kenesisntech.vercel.app/",
              logo: "https://kenesisntech.vercel.app/images/KnT-Logo.png",
              sameAs: [
                "https://www.facebook.com/kenesisntech",
                "https://www.linkedin.com/company/kenesisntech",
                "https://twitter.com/kenesisntech",
              ],
              description:
                "Kenesis & Tech provides cutting-edge software development, AI solutions, and web technologies.",
            }),
          }}
        />
      </body>
    </html>
  );
}
