import { Button } from "@/components/ui/button";
import { DataTable } from "./activity-table";
import { Krdcolumns, columns } from "./columns";
import { twMerge } from "tailwind-merge";
import FormButton from "@/components/ui/form-button";
import { Logout } from "@/actions";

export default function ProfilePage({
  lang,
  member,
}: {
  lang: "kur" | "eng";
  member: any;
}) {
  const isKrd = lang === "kur";
  return (
    <>
      <div className="flex flex-col justify-start  gap-4 text-xs lg:text-lg">
        <div className=" flex flex-col justify-start gap-4">
          <h1 className="text-2xl">{member.name}</h1>
          <form action={Logout.bind(null, lang)}>
            <FormButton variant="destructive">Sign out</FormButton>
          </form>
        </div>

        <div
          className={twMerge(
            "flex h-full flex-col justify-between gap-2 text-xl md:flex-row",
            isKrd && "text-right md:flex-row-reverse",
          )}
        >
          <ul className=" flex h-full w-full flex-col gap-4 overflow-auto pb-8">
            <h2 className="text-2xl underline underline-offset-4">
              {isKrd ? "زانیاری کەسی" : "Personal Info"}
            </h2>
            <li>
              {isKrd ? "بەرواری لە دایكبوون" : "Birth: "}:
              {new Date(member.birth).toLocaleDateString()}
            </li>
            <li>
              {isKrd ? "ڕەگەز " : "Gender"}:{" "}
              {isKrd
                ? member.gender === "male"
                  ? "نێر"
                  : "مێ"
                : member.gender}
            </li>
            <li>
              {isKrd ? (
                <>{member.city} :شاری نیشتەجێبوون</>
              ) : (
                <>City: {member.city}</>
              )}
            </li>
            <li>
              {isKrd ? (
                <>{member.address} :گەڕەك</>
              ) : (
                <>Address: {member.address}</>
              )}
            </li>

            <li>
              {isKrd ? (
                <>{member.phone} :ژمارەی تەلەفۆن</>
              ) : (
                <>Phone: {member.phone}</>
              )}
            </li>
            <li>
              {isKrd ? <>{member.email} :ئیمێڵ</> : <>Email: {member.email}</>}
            </li>

            <li>
              {isKrd ? (
                <>
                  <a href={member.telegram} target="_blank">
                    {member.telegram}
                  </a>
                  : تێلەگرام
                </>
              ) : (
                <>
                  Telegram:
                  <a href={member.telegram} target="_blank">
                    {member.telegram}
                  </a>
                </>
              )}
            </li>
          </ul>
          <ul className="flex h-full w-full flex-col justify-start gap-4 overflow-auto">
            <h2 className="text-2xl underline underline-offset-4">
              {isKrd ? "زانیاری گشتی" : "General Info"}
            </h2>
            <li>
              {isKrd ? <>{member.stage} :قۆناغ</> : <>Stage:{member.stage}</>}
            </li>
            <li>
              {isKrd ? (
                <>{member.sos} :باری خوێندن</>
              ) : (
                <>State of Study: {member.sos}</>
              )}
            </li>
            <li>
              {isKrd ? (
                <>{member.college} :کۆلێژ</>
              ) : (
                <>College: {member.college}</>
              )}
            </li>
            <li>
              {isKrd ? <>{member.work} :پیشە</> : <>Work: {member.work}</>}
            </li>

            <li>
              {isKrd ? (
                <>{member.points} :پۆینتەکان</>
              ) : (
                <>Points: {member.points}</>
              )}
            </li>
            <li>
              {isKrd ? (
                <>
                  {new Date(member.dateJoined).toLocaleDateString()} : بەرواری
                  بەشداری کردن
                </>
              ) : (
                <>
                  Date Joined:{" "}
                  {new Date(member.dateJoined).toLocaleDateString()}
                </>
              )}
            </li>
          </ul>
          <ul className=" flex h-full min-h-[450px] w-full flex-col justify-start gap-4 lg:overflow-y-auto">
            <h2 className="text-2xl underline underline-offset-4">
              {isKrd ? "چالاكیەکان" : "Activities Info"}
            </h2>

            <DataTable
              lang={lang}
              columns={isKrd ? Krdcolumns : columns}
              data={member.activities}
            />
          </ul>
        </div>
      </div>
    </>
  );
}
