import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Build Empires on the Web",
  description:
    "I'll build and deploy a slick, blazingly-fast, mobile-friendly website with interactive components, easy management system and the best SEO — at an affordable (and negotiable) pricing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
