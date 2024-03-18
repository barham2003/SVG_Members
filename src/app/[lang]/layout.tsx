import Navbar from "@/components/navbar";
import NextTopLoader from "nextjs-toploader";
import { Amiri as Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin-ext"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: "eng" | "kur" };
}>) {
  return (
    <html lang={lang === "kur" ? "ku" : "en"} suppressHydrationWarning>
      <body className={`${roboto.className} font-sans`}>
        <Navbar lang={lang} />
        <div className="m-auto max-w-[2000px] p-6">{children}</div>
        <NextTopLoader color="white" />
      </body>
    </html>
  );
}
