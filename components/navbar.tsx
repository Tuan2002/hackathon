"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const pathname = usePathname()
  const { data: session } = useSession()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Next.js App Template</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/"
              className={`flex items-center text-sm font-medium ${
                pathname === "/" ? "text-foreground" : "text-foreground/60"
              } transition-colors hover:text-foreground/80`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`flex items-center text-sm font-medium ${
                pathname === "/about" ? "text-foreground" : "text-foreground/60"
              } transition-colors hover:text-foreground/80`}
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {session ? (
            <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
