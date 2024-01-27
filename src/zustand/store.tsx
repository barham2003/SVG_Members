import { create } from "zustand";

type Language = {
  lang: "english" | "kurdish";
  changeToKurdish: () => void;
  changeToEnglish: () => void;
};

const useLanguage = create<Language>()((set) => ({
  lang: "kurdish",
  changeToKurdish: () => set((state) => ({ lang: "kurdish" })),
  changeToEnglish: () => set((state) => ({ lang: "english" })),
}));
