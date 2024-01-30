import getDefinition from "@/static-data/definition";
import ParamsType from "./paramsType";
import Image from "next/image";
import svgMain from "/public/svg-enhance.jpg";
import { twMerge } from "tailwind-merge";
import { getOurWork } from "@/static-data/ourWork";

export default async function Home({ params: { lang } }: ParamsType) {
  const defenition = getDefinition(lang);
  const ourWorks = getOurWork(lang);
  const isKurdish = lang === "kur";
  return (
    <main>
      <div
        className={twMerge(
          "flex flex-col gap-8",
          "text-justify text-lg leading-relaxed md:text-2xl",
          isKurdish && "text-right",
        )}
      >
        <Image alt="svg-main" width="700" src={svgMain} />
        <section className=" space-y-4">
          <h2 className="text-3xl font-bold md:text-6xl">
            {isKurdish ? "ئێمە کێین؟" : "Who are we?"}
          </h2>
          <p>{defenition}</p>
        </section>
        <section className=" space-y-4">
          <h2 className="text-3xl font-bold md:text-6xl">
            {isKurdish ? "چی دەکەین؟" : "What we do?"}
          </h2>
          <ul className="space-y-4">
            {ourWorks.map((work, index) => (
              <li key={index}>{work}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
