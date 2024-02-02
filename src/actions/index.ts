"use server";
import "dotenv";
const ApiURL = process.env.API_URL;
import { signIn, signOut } from "@/app/auth";
import { notFound, redirect } from "next/navigation";

export async function getProfile(id: string) {
  if (!id) return notFound();

  const res = await fetch(`${ApiURL}/members/${id}`, {
    next: { revalidate: 300 },
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
  return { message: "" };
}

export async function Logout(lang: "kur" | "eng") {
  await signOut();
  redirect(`/${lang}/profile`);
}

export async function getActivities() {
  const res = await fetch(`${ApiURL}/posts`, {
    next: { revalidate: 300 },
  });

  const { data } = await res.json();
  return data;
}

export async function addForm(
  formState: AnotherFormProps,
  formData: FormData,
): Promise<AnotherFormProps> {
  const data = Object.fromEntries(formData);
  console.log(data);
  const res = await fetch(`${ApiURL}/forms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (res.ok) return { message: "Done" };
  if (!res.ok) return { message: json.message };

  return { message: "" };
}
