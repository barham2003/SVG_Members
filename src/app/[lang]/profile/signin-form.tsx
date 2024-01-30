"use client";
import { Login, getProfile } from "@/actions";
import { useFormState } from "react-dom";

export default function SigninForm({ lang }: { lang: "kur" | "eng" }) {
  const [{ message }, FormAction] = useFormState(Login, { message: "" });

  return (
    <>
      <form action={FormAction}>
        <br />
        <input type="text" name="id" placeholder="nothing" />
        <button>Submit</button>
      </form>
    </>
  );
}
