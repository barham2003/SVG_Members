import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Volunteers Group",
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://www.smartvolunteersgroup.com"),
  description:
    "Smart Volunteer Group is a non-profit non-governmental volunteer group. On 14/5/2020, when the coronavirus was plaguing people, a group of young people decided not to stop and established Smart Volunteer Group at Smart Institute. Since then, the group has continued to grow and now consists of more than two hundred members and works in Kirkuk and some other cities in the kudistan Region.",
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
    "kurdistan",
    "kudistan",
    "charity",
    "گرووپی خۆبەخشی سماڕت",
    "گرووپی خۆبەخشی سمارت",
    "گرووپی خۆبەخشی",
    "کاری خۆبەخشی",
    "خۆبەخشی",
  ],
};

import Navbar from "@/components/navbar";
import NextTopLoader from "nextjs-toploader";
import { Amiri } from "next/font/google";
import { getLang } from "@/actions";

const font = Amiri({
  subsets: ["latin-ext"],
  weight: ["400", "700"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getLang();
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${font.className} font-sans`}>
        <Navbar lang={lang} />
        <div className="m-auto max-w-[2000px] p-6">{children}</div>
        <NextTopLoader color="white" />
      </body>
    </html>
  );
}
