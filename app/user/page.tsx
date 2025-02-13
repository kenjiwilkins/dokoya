import type { Metadata } from "next";
import Image from "next/image";
import { UserRegistrationForm } from "@/components/UserRegistrationForm";

export const metadata: Metadata = {
  title: "Dokoya - User registration",
  description: "Dokoya user registration page",
};

export default function UserRegistration() {
  return (
    <main className="flex h-svh w-svw items-center justify-center">
      <section className="w-full p-8 md:w-1/2 md:rounded-md md:border md:border-gray-300 md:shadow-md">
        <div className="flex flex-col items-center justify-center gap-2 pb-6">
          <h1 className="text-3xl font-bold">Dokoya</h1>
          <p className="text-gray-500">User registration</p>
          <Image
            className="w-24 rounded-full"
            src="/logo.jpeg"
            alt="Dokoya logo"
            width={100}
            height={100}
          />
        </div>
        <UserRegistrationForm username="test" email="test@test.com" />
      </section>
    </main>
  );
}
