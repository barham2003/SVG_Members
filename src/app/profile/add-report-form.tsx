"use client";

import { addReport } from "@/actions";
import { Alert } from "@/components/ui/alert";
import FormButton from "@/components/ui/form-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function AddReportForm({ lang }: { lang: "ku" | "en" }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [{ message, status, id }, formAction] = useFormState(addReport, {
    message: "",
    status: "",
    id: "",
  });

  useEffect(() => {
    if (formRef.current) {
      formRef.current?.reset();
    }
  }, [id]);

  let convertedMessage;

  if (message === "validation") {
    convertedMessage =
      lang === "ku"
        ? "زانیاریەکان بە تەواوی پڕەوە بکە"
        : "Validation error, please fill in the form correctly.";
  } else if (message === "Done") {
    convertedMessage =
      lang === "ku"
        ? "ڕیپۆرتەکەت بە سەرکەوتووی نێردرا"
        : "Your report has been submitted suceessfully.";
  } else if (message === "login") {
    convertedMessage = lang === "ku" ? "داخل بە" : "Sign In";
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
            lang === "ku" && "text-right",
          )}
        >
          {convertedMessage}
        </Alert>
      )}
      <Input
        type="text"
        name="title"
        className={cn(lang === "ku" && "text-right")}
        placeholder={lang === "ku" ? "بابەت" : "Title"}
      />
      <Textarea
        name="content"
        className={cn(lang === "ku" && "text-right")}
        placeholder={lang === "ku" ? "وردەکاریەکان" : "Content"}
      />
      <FormButton>{lang === "ku" ? "ناردنی ڕیپۆرت" : "Add Report"}</FormButton>
    </form>
  );
}
