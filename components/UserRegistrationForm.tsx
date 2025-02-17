"use client";
import { FC, useMemo, useState } from "react";
import Link from "next/link";

interface Props {
  username: string;
  email: string;
}

export const UserRegistrationForm: FC<Props> = ({ username, email }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const [agree, setAgree] = useState(false);
  const isButtonDisabled = useMemo(() => {
    return loading || newUsername.length === 0 || !agree;
  }, [
    loading,
    newUsername,
    agree,
  ]);
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    // Call API to update username
    // setLoading(false);
    // setSuccess(true);
    console.log(error, success, newEmail);
  }
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <fieldset className="w-full">
        <label htmlFor="email" className="block px-1">
          Email address - read-only
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full rounded bg-gray-50 p-2 text-gray-900 read-only:cursor-not-allowed read-only:bg-gray-200 read-only:text-gray-600 dark:bg-gray-800 dark:text-white read-only:dark:bg-gray-700 read-only:dark:text-gray-400"
          value={email}
          readOnly={email.length > 0}
          required
          onChange={
            email.length > 0 ? undefined : (e) => setNewEmail(e.target.value)
          }
        />
      </fieldset>
      <fieldset className="mt-4 w-full">
        <label htmlFor="username" className="block">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="w-full rounded bg-gray-50 p-2 text-gray-900 read-only:cursor-not-allowed read-only:bg-gray-200 read-only:text-gray-600 dark:bg-gray-800 dark:text-white read-only:dark:bg-gray-700 read-only:dark:text-gray-400"
          required
          placeholder="Enter your username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
      </fieldset>
      <fieldset className="mt-4 w-full flex">
        <label htmlFor="agree" className="flex items-center">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            className="mr-2"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <div className="flex gap-1 items-center">
          <span className="text-sm">
            I agree to 
          </span>
          <Link href="/terms" target="_blank" className="text-blue-500 visited:text-purple-500 hover:text-blue-700">
            Terms & Conditions
          </Link>
          <span className="text-sm">and</span>
          <Link href="/privacy_policy" target="_blank" className="text-blue-500 visited:text-purple-500 hover:text-blue-700">
            Privacy Policy
          </Link>
          </div>
        </label>
      </fieldset>
      <fieldset className="w-full pt-8">
        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 p-4 font-bold text-white active:bg-blue-800 active:text-gray-200 disabled:cursor-not-allowed disabled:bg-gray-300"
          disabled={isButtonDisabled}
        >
          {loading ? "Loading..." : "Register"}
        </button>
      </fieldset>
    </form>
  );
};
