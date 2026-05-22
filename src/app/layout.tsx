import type { Metadata, Viewport } from "next";
import "./globals.css";

// Viewport configuration
export const viewport: Viewport = {
  themeColor: "#F05A28",
};

// Favicon and Manifest Setup
export const metadata: Metadata = {
  title: "Chapaghor - Your Printing Partner",
  description: "Dynamic Print & E-commerce Platform",
  manifest: "/favicons/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicons/favicon.ico" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png" },
      { url: "/favicons/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}