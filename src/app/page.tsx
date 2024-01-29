import { redirect } from "next/navigation";

export default function page() {
  redirect("/kur");
  return <div>page</div>;
}
