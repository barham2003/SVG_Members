"use client";

import { addReport } from "@/actions";
import { Alert } from "@/components/ui/alert";
import FormButton from "@/components/ui/form-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function AddReportForm({ lang }: { lang: "kur" | "eng" }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [{ message, status }, formAction] = useFormState(addReport, {
    message: "",
    status: "",
  });

  useEffect(() => {
    if (status === "success" || message === "Done") {
      formRef.current?.reset();
    }
  }, [status, message]);

  let convertedMessage;

  if (message === "validation") {
    convertedMessage =
      lang === "kur"
        ? "زانیاریەکان بە تەواوی پڕەوە بکە"
        : "Validation error, please fill in the form correctly.";
  } else if (message === "Done") {
    convertedMessage =
      lang === "kur"
        ? "ڕیپۆرتەکەت بە سەرکەوتووی نێردرا"
        : "Your report has been submitted suceessfully.";
  } else if (message === "login") {
    convertedMessage = lang === "kur" ? "داخل بە" : "Sign In";
  } else {
    convertedMessage = "هەڵەیەك ڕوویدا..";
  }

  return (
    <form action={formAction} ref={formRef} className="flex flex-col gap-4 p-3">
      {message && (
        <Alert
          className={cn(
            " border-green-600 text-green-600",
            status === "error" && "border-red-600 text-red-600",
            lang === "kur" && "text-right",
          )}
        >
          {convertedMessage}
        </Alert>
      )}
      <Input
        type="text"
        name="title"
        className={cn(lang === "kur" && "text-right")}
        placeholder={lang === "kur" ? "بابەت" : "Title"}
      />
      <Textarea
        name="content"
        className={cn(lang === "kur" && "text-right")}
        placeholder={lang === "kur" ? "وردەکاریەکان" : "Content"}
      />
      <FormButton>{lang === "kur" ? "ناردنی ڕیپۆرت" : "Add Report"}</FormButton>
    </form>
  );
}
