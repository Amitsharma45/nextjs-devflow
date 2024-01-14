import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="h1-bold text-center">Home page</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
