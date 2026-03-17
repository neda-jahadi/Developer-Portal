import type { Metadata } from "next";
import "./globals.css";
import { TopNav } from "@/components/layout/top-nav";

export const metadata: Metadata = {
  title: "Developer Portal MVP",
  description: "A scalable frontend demo built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
