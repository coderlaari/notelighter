import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function NLNavbar() {
  return (
    <nav className="bg-gray-800 h-15 w-full flex gap-3 p-3 text-white">
      <SignedIn>
        <div className="p-1">
          <p>NoteLighter</p>
        </div>
        <div className="ml-auto">
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="p-1">
          <p>NoteLighter</p>
        </div>
      </SignedOut>
    </nav>
  );
}
