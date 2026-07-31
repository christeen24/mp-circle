import { useState } from "react";
import { Sidebar } from "./side-bar";
import { TopNav } from "./top-nav";
import { MobileNav } from "./mobile-nav";
import { MobileSidebar } from "./mobile-sidebar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-background-main relative min-h-screen w-full">
      <Sidebar />

      <TopNav onMenuClick={() => setMobileOpen(true)} />

      <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <main className="min-h-screen pt-16 lg:ml-65">
        {children}
      </main>

      <MobileNav />
    </div>
  );
}
