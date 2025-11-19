import { SignUp } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 p-5">
      <SignUp />
    </div>
  );
}
