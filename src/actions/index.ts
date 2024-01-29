"use server";

interface FormProps {
  data?: any;
  message?: any;
  status: "success" | "pending" | "fail";
}

export async function getProfile(
  formState: FormProps,
  formData: FormData,
): Promise<FormProps> {
  const id = formData.get("memberId");

  if (!id)
    return {
      message: "Please fill all fields",
      status: "fail",
    };

  const res = await fetch(`http://localhost:3001/members/${id}`, {
    next: { revalidate: 0 },
  });

  const json = await res.json();

  if (!res.ok) return { message: json.message, status: "fail" };

  return { data: json.data, status: "success" };
}
