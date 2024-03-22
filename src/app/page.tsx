import getDefinition from "@/static-data/definition";
import Image from "next/image";
import svgMain from "/public/group.jpg";
import { twMerge } from "tailwind-merge";
import { getOurWork, workDefintion } from "@/static-data/ourWork";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getLang } from "@/actions";

export default async function Home() {
  const lang = await getLang();
  const defenition = getDefinition(lang);
  const ourWorks = getOurWork(lang);
  const isku = lang === "ku";
  const workDef = workDefintion(lang);

  return (
    <main>
      <div
        className={twMerge(
          "flex flex-col gap-16",
          "bg-white/20 text-justify text-lg leading-loose ",
          isku && "text-right",
        )}
      >
        {/* ================ FIRST SECTION ================ */}

        <section
          className={twMerge(
            "flex flex-col items-center lg:flex-row-reverse",
            isku && "lg:flex-row",
          )}
        >
          {/* IMAGE */}
          <Image alt="svg-main" className="lg:w-1/2" src={svgMain} />

          {/* TEXT */}
          <div className=" space-y-4 lg:w-1/2">
            <h2 className="text-3xl font-bold md:text-6xl">
              {isku ? "ئێمە کێین؟" : "Who are we?"}
            </h2>
            <p className="lg:text-2xl lg:leading-loose">{defenition}</p>
            <div
              className={twMerge("flex w-full gap-4", isku && "justify-end")}
            >
              <Link href={`/${lang}/activities`}>
                <Button className="text-lg font-semibold md:text-xl">
                  {isku ? "چالاكیەکانمان" : "Our Activities"}
                </Button>
              </Link>
              <Link href={`/${lang}/register`}>
                <Button className="text-lg font-semibold md:text-xl">
                  {isku ? "بەشداری کردن" : "Register"}
                </Button>
              </Link>
            </div>
          </div>
        </section>
        {/* ================ SECOND SECTION ================ */}

        <section className="flex flex-col gap-5">
          {/* WORKS TITLE */}
          <h2 className=" text-3xl font-bold md:text-6xl">
            {isku ? "چی دەکەین؟" : "What we do?"}
          </h2>
          <p className="text-xl md:text-2xl lg:leading-loose">{workDef}</p>

          {/* WORKS */}
          <ul className="text-lg lg:text-xl">
            {ourWorks.map((work, index) => (
              <li
                key={index}
                className={twMerge(
                  "flex flex-col items-center justify-end lg:flex-row-reverse",
                  isku && "lg:flex-row",
                )}
              >
                <p className="lg:text-2xl">{work.text}</p>
                <Image
                  src={work.img}
                  className="max-h-[306px] min-h-[220px] w-auto"
                  alt="smart volunteer work image"
                  quality={80}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
