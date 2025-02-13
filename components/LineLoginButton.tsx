"use client";
import Image from "next/image";
import { FC } from "react";
import { signIn } from "next-auth/react";

const LineLoginButton: FC = () => {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded border p-2"
      onClick={() => signIn("line")}
    >
      <Image
        aria-hidden
        src="/line_icon.png"
        alt="Line icon"
        width={24}
        height={24}
      />
      <span className="font-bold">LINE</span>
    </button>
  );
};

export default LineLoginButton;
