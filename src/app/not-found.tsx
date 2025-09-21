"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center p-4">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Separator className="my-4 w-full max-w-lg" />
      <Link href="/" className="text-sm hover:underline">
        Return Home
      </Link>
    </main>
  );
}
