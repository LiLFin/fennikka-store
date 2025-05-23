import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fennikka | Lakshadweep Products",
  description: "Authentic local products from Lakshadweep – dried tuna, fish pickle, coconut shell crafts, and more.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-800">Fennikka</h1>
            <ul className="flex gap-6 text-sm md:text-base font-medium text-gray-700">
              <li><a href="/" className="hover:text-green-700">Home</a></li>
              <li><a href="/products" className="hover:text-green-700">Products</a></li>
              <li><a href="/contact" className="hover:text-green-700">Contact</a></li>
            </ul>
          </nav>
        </header>

        {children}
      </body>

    </html>
  );
}
