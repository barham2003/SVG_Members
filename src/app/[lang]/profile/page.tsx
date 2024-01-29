import type ParamsType from "../paramsType";
import ProfilePage from "./profile-page";

export default function page({ params: { lang } }: ParamsType) {
  return (
    <>
      <ProfilePage lang={lang} />
    </>
  );
}
