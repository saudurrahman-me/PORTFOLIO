import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/config";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | Software Engineer & Machine Learning`,
    description: "Software Engineer focused on Machine Learning, application development, and practical software solutions.",
    type: "website",
    url: "https://your-domain.com", // Replace with actual domain later
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Software Engineer & Machine Learning`,
    description: "Software Engineer focused on Machine Learning, application development, and practical software solutions.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0a] text-gray-200 antialiased selection:bg-blue-500/30 selection:text-blue-200`}>
        {children}
      </body>
    </html>
  );
}
