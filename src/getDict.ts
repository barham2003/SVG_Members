import "server-only";

const dictionaries = {
  en: () => import("./dict/en.json").then((module) => module.default),
  ku: () => import("./dict/ku.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "ku") =>
  dictionaries[locale]();
