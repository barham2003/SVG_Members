import { getNavLinks } from "@/static-data/nav-links";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import LangToggler from "./lang-toggler";

export default function Navbar({ lang }: { lang: "kur" | "eng" }) {
  const links = getNavLinks(lang);
  let isKurdish: true | false = lang === "kur";

  return (
    <nav
      className={twMerge(
        "flex h-16 w-full justify-between bg-black px-4 text-xl",
        isKurdish && "flex-row-reverse",
      )}
    >
      <ul
        className={twMerge(
          "flex h-full items-center justify-start gap-4 text-white",
          isKurdish && "flex-row-reverse",
        )}
      >
        {links.map(({ item, href }, index) => (
          <li key={index} className=" transition-all hover:opacity-90">
            <Link href={href}>{item}</Link>
          </li>
        ))}
      </ul>
      <ul className="flex h-full items-center">
        <LangToggler />
      </ul>
    </nav>
  );
}
