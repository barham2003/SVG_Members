import type { Metadata } from "next";
import "./globals.css";
import { Cairo as Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Smart Volunteers Group",
  description: "Volunteer Group",
};

const robot = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robot.className} font-sans`}>{children}</body>
    </html>
  );
}
