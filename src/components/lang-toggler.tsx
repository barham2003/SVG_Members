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
import { changeLang, getLang } from "@/actions";

export default async function LangToggler() {
  const lang = await getLang();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className=" focus-within:bordre-0 w-[80px]">
        <Button variant="lang">
          <Image src={lang === "ku" ? Kflag : Uflag} width="30" alt="flag" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" flex !min-w-[70px] flex-col  items-center">
        <DropdownMenuItem>
          <form action={changeLang.bind(null, "ku")}>
            <button>
              <Image alt="flag" width="30" src={Kflag} />
            </button>
          </form>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <form action={changeLang.bind(null, "en")}>
            <button>
              <Image alt="flag" width="30" src={Uflag} />
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
