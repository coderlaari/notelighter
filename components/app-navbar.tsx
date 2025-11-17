import Link from "next/link";
import { Button } from "./ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <nav className="bg-gray-800 h-15 w-full flex gap-3 p-1.5">
      <SignedIn>
        <Button>
          <Link href="/home">Home</Link>
        </Button>
        <Button>
          <Link href="/notes">Notes</Link>
        </Button>
        <div className="ml-auto">
          <UserButton />
        </div>
      </SignedIn>
    </nav>
  );
}
