import Navbar from "@/components/navbar";

export default function layout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: "eng" | "kur" };
}>) {
  return (
    <div>
      <Navbar lang={lang} />
      {children}
    </div>
  );
}
