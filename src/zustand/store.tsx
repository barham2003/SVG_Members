import { create } from "zustand";

type Language = {
  lang: "eng" | "kur";
  changeToKurdish: () => void;
  changeToEnglish: () => void;
};

export const useLanguage = create<Language>()((set) => ({
  lang: "kur",
  changeToKurdish: () => set((state) => ({ lang: "kur" })),
  changeToEnglish: () => set((state) => ({ lang: "eng" })),
}));
