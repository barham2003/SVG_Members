import getDefinition from "@/static-data/definition";
import ParamsType from "./paramsType";
import Image from "next/image";
import svgMain from "/public/group.jpg";
import { twMerge } from "tailwind-merge";
import { getOurWork, workDefintion } from "@/static-data/ourWork";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home({ params: { lang } }: ParamsType) {
  const defenition = getDefinition(lang);
  const ourWorks = getOurWork(lang);
  const isKur = lang === "kur";
  const workDef = workDefintion(lang);
  return (
    <main>
      <div
        className={twMerge(
          "flex flex-col gap-16",
          "bg-white/20 text-justify text-lg leading-loose ",
          isKur && "text-right",
        )}
      >
        {/* ================ FIRST SECTION ================ */}

        <section
          className={twMerge(
            "flex flex-col items-center lg:flex-row-reverse",
            isKur && "lg:flex-row",
          )}
        >
          {/* IMAGE */}
          <Image alt="svg-main" className="lg:w-1/2" src={svgMain} />

          {/* TEXT */}
          <div className=" space-y-4 lg:w-1/2">
            <h2 className="text-3xl font-bold md:text-6xl">
              {isKur ? "ئێمە کێین؟" : "Who are we?"}
            </h2>
            <p className="lg:text-2xl lg:leading-loose">{defenition}</p>
            <div
              className={twMerge("flex w-full gap-4", isKur && "justify-end")}
            >
              <Link href={`/${lang}/activities`}>
                <Button className="text-lg font-semibold md:text-xl">
                  {isKur ? "چالاكیەکانمان" : "Our Activities"}
                </Button>
              </Link>
              <Link href={`/${lang}/register`}>
                <Button className="text-lg font-semibold md:text-xl">
                  {isKur ? "بەشداری کردن" : "Register"}
                </Button>
              </Link>
            </div>
          </div>
        </section>
        {/* ================ SECOND SECTION ================ */}

        <section className="flex flex-col gap-5">
          {/* WORKS TITLE */}
          <h2 className=" text-3xl font-bold md:text-6xl">
            {isKur ? "چی دەکەین؟" : "What we do?"}
          </h2>
          <p className="text-xl md:text-2xl lg:leading-loose">{workDef}</p>

          {/* WORKS */}
          <ul className="text-lg lg:text-xl">
            {ourWorks.map((work, index) => (
              <li
                key={index}
                className={twMerge(
                  "flex flex-col items-center justify-end lg:flex-row-reverse",
                  isKur && "lg:flex-row",
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

export async function generateStaticParams() {
  const langs = ["kur", "eng"];

  return langs.map((lang: any) => {
    return {
      lang,
    };
  });
}
