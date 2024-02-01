"use client";
import { Input } from "@/components/ui/input";
import FormButton from "@/components/ui/form-button";
import { useFormState } from "react-dom";
import { addForm } from "@/actions";
import { Select, SelectValue } from "@/components/ui/select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
export default function RegisterForm({ isKrd }: { isKrd: boolean }) {
  const [{ message }, formAction] = useFormState(addForm, { message: "" });

  return (
    <div className="flex w-full flex-col items-center">
      <form
        className=" relative flex w-full flex-col items-center gap-2 rounded-md border-2 bg-secondary/20  p-3 md:w-1/2"
        action={formAction}
      >
        <h1 className=" col-span-2 items-center text-center text-2xl">
          {isKrd ? "بەشداربە لەگەڵماندا" : "Join Us"}
        </h1>
        {message && message === "Done" && (
          <span>
            {isKrd
              ? "فۆڕمەکەت بە سەرکەوتووی نێردرا"
              : "Your form has been submitted suceessfully."}
          </span>
        )}
        <Input
          required
          type="text"
          className={`${isKrd ? "text-right" : ""} text-lg`}
          name="name"
          placeholder={isKrd ? "ناوی سیانی" : "Full Name"}
        />

        <Input
          required
          type="text"
          className={`${isKrd ? "text-right" : ""} text-lg`}
          name="email"
          placeholder={isKrd ? "ئیمەیڵ" : "Email"}
        />

        <Input
          required
          type="text"
          className={`${isKrd ? "text-right" : ""} text-lg`}
          name="telegram"
          placeholder={isKrd ? "ئایدی تێلەگرام" : "Telegram ID"}
        />

        <Input
          required
          type="number"
          className={`${isKrd ? "text-right" : ""} text-lg`}
          name="phone"
          placeholder={isKrd ? "ژمارەی مۆبایل" : "Phone"}
        />

        <Input
          required
          type="date"
          className={`${isKrd ? "text-right" : ""} text-lg`}
          name="birth"
          placeholder={isKrd ? "بەرواری لەدایكبوون" : "Birth"}
        />

        <Select>
          <SelectTrigger className={isKrd ? "flex-row-reverse" : ""}>
            <SelectValue placeholder={isKrd ? "ڕەگەرز" : "Gender"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              className={isKrd ? "flex-row-reverse" : ""}
              value="male"
            >
              {isKrd ? "نێر" : "Male"}
            </SelectItem>
            <SelectItem
              className={isKrd ? "flex-row-reverse" : ""}
              value="female"
            >
              {isKrd ? "مێ" : "Female"}
            </SelectItem>
          </SelectContent>
        </Select>

        <Input
          required
          type="text"
          className={`${isKrd ? "text-right" : ""} text-lg`}
          name="city"
          placeholder={isKrd ? "شار" : "City"}
        />

        <Input
          required
          type="text"
          className={`${isKrd ? "text-right" : ""} text-lg`}
          name="address"
          placeholder={isKrd ? "گەڕەك" : "Address"}
        />

        <Input
          required
          type="text"
          className={`${isKrd ? "text-right" : ""} text-lg`}
          name="sos"
          placeholder={isKrd ? "باری خوێندن" : "State of Study"}
        />

        <Input
          required
          type="text"
          className={`${isKrd ? "text-right" : ""} text-lg`}
          name="stage"
          placeholder={isKrd ? "قۆناغی خوێندن" : "Stage"}
        />

        <Input
          required
          type="text"
          className={`${isKrd ? "text-right" : ""} text-lg`}
          name="college"
          placeholder={isKrd ? "کۆڵێج" : "College"}
        />

        <Input
          required
          type="text"
          className={`${isKrd ? "text-right" : ""} text-lg`}
          name="work"
          placeholder={isKrd ? "کار" : "Work"}
        />

        <FormButton className="w-1/3 text-lg font-bold">
          {isKrd ? "ناردن" : "Submit"}
        </FormButton>
      </form>
    </div>
  );
}
