"use server";
import "dotenv";
import { cookies } from "next/headers";
const ApiURL = process.env.API_URL;
// import { signIn, signOut } from "@/app/auth";
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

interface FormProps {
  message: string;
  status: string;
}

export async function Login(formState: AnotherFormProps, FormData: FormData) {
  const id = FormData.get("id") as string;
  const res = await fetch(`${ApiURL}/members/${id}?select=_id&populate=false`);
  const json = await res.json();
  if (!res.ok)
    return {
      message: json.message,
      status: "error",
    };

  cookies().set("id", json.data._id, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "strict",
    secure: true,
    httpOnly: true,
  });
  return json;
}

export async function Logout(lang: "kur" | "eng") {
  cookies().delete("id");
  return redirect(`/${lang}/profile`);
}

export async function getSessionId(): Promise<null | string> {
  const id = cookies().get("id")?.value;
  if (!id) return null;
  return id;
}

export async function getActivities() {
  const res = await fetch(`${ApiURL}/posts`, {
    next: { revalidate: 90 },
  });

  const { data } = await res.json();
  return data;
}

export async function addForm(
  formState: FormProps,
  formData: FormData,
): Promise<FormProps> {
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
  if (res.ok) return { message: "Done", status: "success" };
  if (!res.ok) return { message: json.message, status: "error" };

  return { message: "", status: "success" };
}
