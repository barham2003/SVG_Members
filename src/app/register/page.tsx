import { getLang } from "@/actions";
import RegisterForm from "./register-form";
export default async function Page() {
  const lang = await getLang();
  const isKrd = lang === "ku";
  return (
    <div className=" flex min-h-[80dvh] items-center justify-center">
      <RegisterForm isKrd={isKrd} />
    </div>
  );
}

export async function generateStaticParams() {
  const langs = ["ku", "en"];

  return langs.map((lang: any) => {
    return {
      lang,
    };
  });
}
