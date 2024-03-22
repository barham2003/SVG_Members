import { getNavLinks } from "@/static-data/nav-links";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import LangToggler from "./lang-toggler";

export default function Navbar({ lang }: { lang: "ku" | "en" }) {
  const links = getNavLinks(lang);
  let iskudish: true | false = lang === "ku";

  return (
    <nav
      className={twMerge(
        "flex h-16 w-full justify-between bg-[#042c61] px-4 text-xl",
        iskudish && "flex-row-reverse",
      )}
    >
      <ul
        className={twMerge(
          "flex h-full items-center justify-start gap-4 text-white",
          iskudish && "flex-row-reverse",
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
