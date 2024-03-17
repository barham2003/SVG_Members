import type ParamsType from "../paramsType";
import ProfilePage from "./profile-page";
import SigninForm from "./signin-form";
import { getProfile, getSessionId } from "@/actions";

export default async function page({ params: { lang } }: ParamsType) {
  let member;
  const sessionId = await getSessionId();
  if (sessionId) member = await getProfile(sessionId);

  return (
    <>
      {!sessionId && <SigninForm lang={lang} />}
      {sessionId && <ProfilePage lang={lang} member={member} />}
    </>
  );
}
