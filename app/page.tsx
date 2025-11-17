"use client";

import { SignedIn, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { user } = useUser();
  if (user) {
    redirect("/home");
  }
  return (
    <main className="text-center w-full h-full p-5">
      <p className="text-3xl">Welcome to NoteLighter!</p>
      <p className="text-2xl">NoteLighter isn't just any notetaking app.</p>
    </main>
  );
}
