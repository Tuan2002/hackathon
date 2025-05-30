"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { mainNavbarItems } from "@/constants/menuItems";
import { UserNav } from "./dashboard/user-nav";

export function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  return (
    <header className="fixed left-0 right-0 top-0 z-40 w-full border-b bg-background px-5">
      <div className="flex h-16 items-center justify-between space-x-4 sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Hackathon 2025
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {mainNavbarItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center text-sm font-medium ${
                  pathname === item.href
                    ? "text-foreground"
                    : "text-foreground/60"
                } transition-colors hover:text-foreground/80`}
              >
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {session ? (
            <UserNav user={session.user} />
          ) : (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
