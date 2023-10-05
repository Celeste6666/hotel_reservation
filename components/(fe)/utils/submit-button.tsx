"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="btn btn-primary btn-block btn-circle"
    >
      {pending ? text + "中" : text}
    </button>
  );
}
