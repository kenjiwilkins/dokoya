import type { Metadata } from "next";
import Link from "next/link";
import LineLoginButton from "../components/LineLoginButton";

export const metadata: Metadata = {
  title: "Dokoya - Home",
  description: "Dokoya home page",
};

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const error = (await searchParams).error;
  const errorMessage = error === "SESSION_EXPIRED" ? "Session expired" : "";
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      {errorMessage.length > 0 && (
        <div className="row-start-1 flex flex-col items-center gap-4">
          <p className="text-xl text-red-500">{errorMessage}</p>
          <p className="text-sm text-gray-500">Please log in again</p>
        </div>
      )}
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <LineLoginButton />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/terms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms & Conditions
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/privacy_policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </Link>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Dokoya. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
