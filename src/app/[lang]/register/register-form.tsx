"use client";
import { Input } from "@/components/ui/input";
import FormButton from "@/components/ui/form-button";
import { useFormState } from "react-dom";
import { addForm } from "@/actions";
import { Select, SelectValue } from "@/components/ui/select";
import { SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
export default function RegisterForm({ isKrd }: { isKrd: boolean }) {
  const [{ message }, formAction] = useFormState(addForm, { message: "" });

  return (
    <form
      className=" relative flex w-full flex-col items-center gap-2 rounded-md border bg-secondary/20  p-3 md:w-1/2"
      action={formAction}
    >
      <h1 className=" col-span-2 items-center text-center text-2xl">Join Us</h1>
      {message && <span>{message}</span>}

      <Input
        required
        type="text"
        className={isKrd ? "text-right" : ""}
        name="name"
        placeholder={isKrd ? "ناوی سیانی" : "Full Name"}
      />

      <Input
        required
        type="text"
        className={isKrd ? "text-right" : ""}
        name="email"
        placeholder={isKrd ? "ئیمەیڵ" : "Email"}
      />

      <Input
        required
        type="text"
        className={`${isKrd ? "text-right" : ""}`}
        name="telegram"
        placeholder={isKrd ? "ئایدی تێلەگرام" : "Telegram ID"}
      />

      <Input
        required
        type="number"
        className={`${isKrd ? "text-right" : ""}`}
        name="phone"
        placeholder={isKrd ? "ژمارەی مۆبایل" : "Phone"}
      />

      <Input
        required
        type="date"
        className={`${isKrd ? "text-right" : ""}`}
        name="birth"
        placeholder={isKrd ? "بەرواری لەدایكبوون" : "Birth"}
      />


      <Select >
        <SelectTrigger  className={isKrd?"flex-row-reverse":""}>
          <SelectValue  placeholder={isKrd? "ڕەگەرز": "Gender"} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem className={isKrd? "flex-row-reverse":""} value="male">{isKrd?"نێر":"Male"}</SelectItem>
          <SelectItem className={isKrd? "flex-row-reverse":""} value="female">{isKrd?"مێ":"Female"}</SelectItem>
        </SelectContent>
      </Select>

      <Input
        required
        type="text"
        className={`${isKrd ? "text-right" : ""}`}
        name="city"
        placeholder={isKrd ? "شار" : "City"}
      />

      <Input
        required
        type="text"
        className={`${isKrd ? "text-right" : ""}`}
        name="address"
        placeholder={isKrd ? "گەڕەك" : "Address"}
      />

      <Input
        required
        type="text"
        className={`${isKrd ? "text-right" : ""}`}
        name="sos"
        placeholder={isKrd ? "باری خوێندن" : "State of Study"}
      />

      <Input
        required
        type="text"
        className={`${isKrd ? "text-right" : ""}`}
        name="stage"
        placeholder={isKrd ? "قۆناغی خوێندن" : "Stage"}
      />

      <Input
        required
        type="text"
        className={`${isKrd ? "text-right" : ""}`}
        name="college"
        placeholder={isKrd ? "کۆڵێج" : "College"}
      />

      <Input
        required
        type="text"
        className={`${isKrd ? "text-right" : ""}`}
        name="work"
        placeholder={isKrd ? "کار" : "Work"}
      />

      <FormButton className="w-1/3">Submit</FormButton>
    </form>
  );
}
