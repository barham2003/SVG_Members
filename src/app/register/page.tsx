import ParamsType from "../paramsType";
import RegisterForm from "./register-form";
export default function Page({ params: { lang } }: ParamsType) {
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
