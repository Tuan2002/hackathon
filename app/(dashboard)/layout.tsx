import type React from "react";

import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { UserNav } from "@/components/dashboard/user-nav";
import { requireAuth } from "@/lib/auth-utils";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireAuth();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background px-5">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold">Trang quản trị</h1>
          </div>
          <UserNav user={user} />
        </div>
      </header>
      <div className="flex-1 w-full items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-4">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-4.3rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <DashboardNav user={user} />
        </aside>
        <main className="flex-1 h-[calc(100vh-4.3rem)] overflow-y-auto [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-track]:bg-gray-200 p-2">
          {children}
        </main>
      </div>
    </div>
  );
}
