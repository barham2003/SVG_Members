import { auth } from "@/app/auth";
import type ParamsType from "../paramsType";
import ProfilePage from "./profile-page";
import SigninForm from "./signin-form";
import { getProfile } from "@/actions";

export default async function page({ params: { lang } }: ParamsType) {
  const session = await auth();
  let member;

  if (session?.user?.id) member = await getProfile(session?.user?.id);

  return (
    <>
      {!session?.user && <SigninForm lang={lang} />}
      {session?.user && <ProfilePage lang={lang} member={member} />}
    </>
  );
}
