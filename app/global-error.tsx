"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <main className="flex flex-col justify-between w-full h-screen">
      <div className="flex-col flex-grow justify-center items-center px-4 h-full text-center">
        <p className="mt-4 text-xl font-semibold text-gray-700">
          "Oops! Something went wrong.
        </p>
        <p className="mt-2 text-gray-600">Please try to refresh the page.</p>
        <Button
          onClick={reset}
          variant={"default"}
          className="inline-block px-4 py-2 mt-6 font-semibold text-white rounded-lg bg-button"
        >
          Try again
        </Button>
      </div>
    </main>
  );
}
