import type { Metadata } from "next";
import "./globals.css";
import { Cairo as Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Smart Volunteers Group",
  metadataBase: new URL("https://www.smartvolunteersgroup.com"),
  description:
    "Smart Volunteer Group is a non-profit non-governmental volunteer group. On 14/5/2020, when the coronavirus was plaguing people, a group of young people decided not to stop and established Smart Volunteer Group at Smart Institute. Since then, the group has continued to grow and now consists of more than two hundred members and works in Kirkuk and some other cities in the Kurdistan Region.",
  robots: {
    index: true,
    indexifembedded: true,
    follow: true,
  },
  openGraph: {
    images: { url: "https://i.ibb.co/7VRM64d/image-2024-03-05-122753434.png" },
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Volunteers Group",
    description: "Smart Volunteers Group",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: ["https://i.ibb.co/7VRM64d/image-2024-03-05-122753434.png"], // Must be an absolute URL
  },
  keywords: [
    "Smart Volunteers Group",
    "kirkuk",
    "volunteer",
    "charity",
    "گرووپی خۆبەخشی سماڕت",
    "گرووپی خۆبەخشی سمارت",
    "گرووپی خۆبەخشی",
    "کاری خۆبەخشی",
  ],
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
