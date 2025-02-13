import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dokoya - User registration",
  description: "Dokoya user registration page",
}

export default function UserRegistration() {
  return (
    <main className="flex w-svw h-svh items-center justify-center">
      <section className="w-full md:w-1/2 md:border md:border-gray-300 md:rounded-md md:shadow-md p-8">
        <div className="flex flex-col items-center justify-center pb-6 gap-2">
          <h1 className="text-3xl font-bold">Dokoya</h1>
          <p className="text-gray-500">User registration</p>
          <Image className="rounded-full w-24" src="/logo.jpeg" alt="Dokoya logo" width={100} height={100}/>
        </div>
        <form className="w-full">
          <fieldset className="w-full">
            <label htmlFor="email" className="block px-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded p-2 read-only:bg-gray-200 read-only:text-gray-600 read-only:dark:bg-gray-700 read-only:dark:text-gray-400 read-only:cursor-not-allowed"
              readOnly
              value="jane.smith@sample.com"
              />
            </fieldset>
          <fieldset className="w-full mt-4">
            <label htmlFor="username" className="block">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full bg-gray-50 rounded p-2 text-gray-900"
              required
              placeholder="Enter your username"
              defaultValue="Jane Smith"
              />
            </fieldset>
          <fieldset className="w-full mt-4">
            <button type="submit" className="w-full bg-blue-500 active:bg-blue-800 active:text-gray-200 text-white rounded-md p-2 disabled:bg-gray-300 disabled:cursor-not-allowed">
              Register
            </button>
          </fieldset>
        </form>
      </section>
    </main>
  )
}