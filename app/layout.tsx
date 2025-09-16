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
  title: "Kenesis & Tech | Software, AI & Web Solutions – Lahore, Pakistan",
  description:
    "Kenesis & Tech delivers custom software, AI solutions, and web development services to help businesses innovate, scale, and achieve digital success.",
  keywords: [
    "Kenesis & Tech",
    "Kenesis",
    "software development company Pakistan",
    "AI solutions",
    "machine learning",
    "web development agency",
    "web design Lahore",
    "digital transformation",
    "tech agency",
    "custom software solutions",
    "enterprise software",
    "IT services Pakistan",
    "startup technology partner"
  ],
  authors: [{ name: "Kenesis & Tech" }],
  robots: "index, follow",
  metadataBase: new URL("https://kenesisntech.com"),
  verification: {
    google: "ieLtT_gR0jAf7YltmUvKFzILfJZsfqxZ6upfan0kv98",
  },

  // Open Graph
  openGraph: {
    title: "Kenesis & Tech | Custom Software, AI & Web Solutions",
    description:
      "Pioneering software and AI systems from Lahore — scalable web platforms, machine learning tools & digital services crafted for growth.",
    url: "https://kenesisntech.com/",
    siteName: "Kenesis & Tech",
    images: [
      {
        url: "/images/og-image.png",
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
      "Software, web & AI solutions by Kenesis & Tech. From Lahore to the world — building modern, scalable digital platforms.",
    images: ["/images/og-image.png"],
    creator: "@kenesisntech",
  },

  // Icons
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },

  // Canonical
  alternates: {
    canonical: "https://kenesisntech.com/",
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
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://kenesisntech.com/#organization",
                  name: "Kenesis & Tech",
                  alternateName: ["KenesisnTech", "Kenesis and Tech"],
                  url: "https://kenesisntech.com",
                  logo: "https://kenesisntech.com/images/og-image.png",
                  description:
                    "Kenesis & Tech provides cutting-edge software development, AI solutions, and web technologies.",
                  foundingDate: "2023-01-01",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Main Boulevard",
                    addressLocality: "Lahore",
                    postalCode: "54000",
                    addressCountry: "PK"
                  },
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      email: "info@kenesisntech.com",
                      contactType: "customer service",
                      areaServed: "Worldwide",
                      availableLanguage: ["English", "Urdu"]
                    }
                  ],
                  sameAs: [
                    "https://www.facebook.com/kenesisntech",
                    "https://www.linkedin.com/company/kenesisntech",
                    "https://twitter.com/kenesisntech",
                    "https://www.instagram.com/kenesisntech",
                    "https://www.crunchbase.com/organization/kenesisntech"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://kenesisntech.com/#website",
                  url: "https://kenesisntech.com",
                  name: "Kenesis & Tech",
                  publisher: { "@id": "https://kenesisntech.com/#organization" },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://kenesisntech.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            }),
          }}
        />


      </body>
    </html>
  );
}
