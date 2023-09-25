"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit" className="btn btn-primary btn-block btn-circle">
      {pending ? "註冊中" : "註冊"}
    </button>
  );
}
