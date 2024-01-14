import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex-center min-h-screen w-full">{children}</div>;
}
