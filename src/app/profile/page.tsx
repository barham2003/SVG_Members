import ProfilePage from "./profile-page";
import SigninForm from "./signin-form";
import { getLang, getProfile, getSessionId } from "@/actions";

export default async function page() {
  const lang = await getLang();
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
