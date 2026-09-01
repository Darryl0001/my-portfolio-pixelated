import type { ReactNode } from "react";
import Header from "../components/Header";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-main text-fg-main">
      <Header />

      <main>{children}</main>
    </div>
  );
}