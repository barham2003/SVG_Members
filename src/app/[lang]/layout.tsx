import Navbar from "@/components/navbar";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
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
};

export default function layout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: "eng" | "kur" };
}>) {
  return (
    <>
      <Navbar lang={lang} />
      <div className="m-auto max-w-[2000px] p-6">{children}</div>
      <NextTopLoader color="white" />
    </>
  );
}
