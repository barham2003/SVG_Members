import Navbar from "@/components/navbar";
import NextTopLoader from "nextjs-toploader";

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
