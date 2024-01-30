"use server";

import { signIn, signOut } from "@/app/auth";
import { notFound, redirect } from "next/navigation";

export async function getProfile(id: string) {
  if (!id) return notFound();

  const res = await fetch(`http://localhost:3001/members/${id}`, {
    next: { revalidate: 3600 },
  });

  const json = await res.json();

  if (!res.ok) return notFound();

  return json.data;
}

interface AnotherFormProps {
  message: string;
}

export async function Login(
  formState: AnotherFormProps,
  formData: FormData,
): Promise<AnotherFormProps> {
  const id = formData.get("id") as string;
  const lang = formData.get("lang") as string;
  try {
    await signIn("credentials", { id, redirect: false });
  } catch (e) {
    return { message: "Incorrect ID, please try again." };
  }

  redirect(`/${lang}/profile`);
}

export async function Logout(lang: "kur" | "eng") {
  await signOut();
  redirect(`/${lang}/profile`);
}
