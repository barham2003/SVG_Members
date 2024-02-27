"use client";
import { Login, getProfile } from "@/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import FormButton from "@/components/ui/form-button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useFormState } from "react-dom";
import { twMerge } from "tailwind-merge";

export default function SigninForm({ lang }: { lang: "kur" | "eng" }) {
  const isKrd = lang === "kur";
  const [state, FormAction] = useFormState(Login, { message: "" });
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <h1 className="text-2xl">
        {isKrd ? "زانیاریەکانت وەرگرە" : "Get your profile"}
      </h1>

      <form
        action={FormAction}
        className={twMerge("flex w-[90%] flex-col items-center gap-3 lg:w-1/2")}
      >
        <div
          className={twMerge(
            "flex w-full flex-col gap-2 md:flex-row",
            isKrd && "md:flex-row-reverse",
          )}
        >
          <Input
            type="text"
            name="id"
            className={isKrd ? "text-right" : "text-left"}
            placeholder={
              isKrd ? "ئایدیەکەت لێرەدا بنووسە" : "Write your ID here"
            }
          />
          <input type="text" name="lang" defaultValue={lang} hidden />
          <FormButton>{isKrd ? "بچۆ ژوورەوە" : "Sign In"}</FormButton>
        </div>
        <p className={twMerge("text-left", isKrd && "text-right")}>
          <Link
            href={isKrd ? "/kur/register" : "/eng/register"}
            className=" text-[#042c61]"
          >
            {isKrd ? "کلیك لێرە بکە بۆ بەشداری کردن" : "Click here to Sign Up"}
          </Link>
        </p>
        {state.message && (
          <Alert variant="destructive" className=" flex justify-center">
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}
      </form>
    </div>
  );
}
