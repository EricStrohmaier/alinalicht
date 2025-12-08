"use client";

import Link from "next/link";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <main className="flex flex-col justify-between w-full h-screen">
      <div className="flex flex-col flex-grow justify-center items-center px-4 h-full text-center">
        <h1 className="text-6xl font-bold text-gray-700">404</h1>
        <p className="mt-4 text-xl font-semibold text-gray-700">
          Oops! Page not found.
        </p>
        <p className="mt-2 text-gray-600">
          We can't seem to find the page you're looking for.
        </p>
        <Link
          href="/"
          className="inline-block px-4 py-2 mt-6 font-semibold text-white rounded-lg bg-button"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
