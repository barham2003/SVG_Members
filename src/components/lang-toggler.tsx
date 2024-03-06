"use client";
import Kflag from "/public/kflag.png";
import Uflag from "/public/uflag.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LangToggler() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const dPath = pathname.split("/").slice(2).toString();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className=" focus-within:bordre-0 w-[80px]">
        <Button variant="lang">
          <Image src={lang === "kur" ? Kflag : Uflag} width="30" alt="flag" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" flex !min-w-[70px] flex-col  items-center">
        <DropdownMenuItem>
          <Link href={`/kur/${dPath}`}>
            <Image alt="flag" width="30" src={Kflag} />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/eng/${dPath}`}>
            <Image alt="flag" width="30" src={Uflag} />
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
