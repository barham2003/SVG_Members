"use client";
import { getProfile } from "@/actions";
import React from "react";
import { useFormState } from "react-dom";
import { DataTable } from "./activity-table";
import { Krdcolumns, columns } from "./columns";
import { twMerge } from "tailwind-merge";

export default function ProfilePage({ lang }: { lang: "kur" | "eng" }) {
  const [{ status, message, data }, FormAction] = useFormState(getProfile, {
    status: "pending",
  });

  const isKrd = lang === "kur";
  return (
    <>
      {status !== "success" && (
        <form action={FormAction}>
          {JSON.stringify(status)}
          <br />
          <input type="text" name="memberId" placeholder="nothing" />
          <button>Submit</button>
          {status === "fail" && <span>Error</span>}
        </form>
      )}

      {status === "success" && (
        <div className="flex h-full flex-col justify-start gap-4  text-xs lg:text-lg">
          <div className=" text-center">
            <h1 className="text-2xl">{data.name}</h1>
          </div>

          <div
            className={twMerge(
              "flex h-full flex-col justify-between gap-2 text-xl md:flex-row",
              isKrd && "text-right md:flex-row-reverse",
            )}
          >
            <ul className=" flex h-full w-full  flex-col justify-end gap-4 overflow-auto pb-8">
              <h2 className="text-2xl underline underline-offset-4">
                {isKrd ? "زانیاری کەسی" : "Personal Info"}
              </h2>
              <li>
                {isKrd ? "بەرواری لە دایكبوون" : "Birth: "}:
                {new Date(data.birth).toLocaleDateString()}
              </li>
              <li>
                {isKrd ? "ڕەگەز " : "Gender"}:{" "}
                {isKrd ? (data.gender === "male" ? "نێر" : "مێ") : data.gender}
              </li>
              <li>
                {isKrd ? (
                  <>{data.city} :شاری نیشتەجێبوون</>
                ) : (
                  <>City: {data.city}</>
                )}
              </li>
              <li>
                {isKrd ? (
                  <>{data.address} :گەڕەك</>
                ) : (
                  <>Address: {data.address}</>
                )}
              </li>

              <li>
                {isKrd ? (
                  <>{data.phone} :ژمارەی تەلەفۆن</>
                ) : (
                  <>Phone: {data.phone}</>
                )}
              </li>
              <li>
                {isKrd ? <>{data.email} :ئیمێڵ</> : <>Email: {data.email}</>}
              </li>

              <li>
                {isKrd ? (
                  <>
                    <a href={data.telegram} target="_blank">
                      {data.telegram}
                    </a>
                    : تێلەگرام
                  </>
                ) : (
                  <>
                    Telegram:
                    <a href={data.telegram} target="_blank">
                      {data.telegram}
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
                {isKrd ? <>{data.stage} :قۆناغ</> : <>Stage:{data.stage}</>}
              </li>
              <li>
                {isKrd ? (
                  <>{data.sos} :باری خوێندن</>
                ) : (
                  <>State of Study: {data.sos}</>
                )}
              </li>
              <li>
                {isKrd ? (
                  <>{data.college} :کۆلێژ</>
                ) : (
                  <>College: {data.college}</>
                )}
              </li>
              <li>{isKrd ? <>{data.work} :پیشە</> : <>Work: {data.work}</>}</li>

              <li>
                {isKrd ? (
                  <>{data.points} :پۆینتەکان</>
                ) : (
                  <>Points: {data.points}</>
                )}
              </li>
              <li>
                {isKrd ? (
                  <>
                    {new Date(data.dateJoined).toLocaleDateString()} : بەرواری
                    بەشداری کردن
                  </>
                ) : (
                  <>
                    Date Joined:{" "}
                    {new Date(data.dateJoined).toLocaleDateString()}
                  </>
                )}
              </li>
            </ul>
            <ul className=" flex h-full min-h-[450px] w-full flex-col justify-start gap-4  lg:overflow-y-auto">
              <h2 className="text-2xl underline underline-offset-4">
                {isKrd ? "چالاكیەکان" : "Activities Info"}
              </h2>

              <DataTable
                lang={lang}
                columns={isKrd ? Krdcolumns : columns}
                data={data.activities}
              />
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
