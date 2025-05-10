import type React from "react"
import { getCurrentUser } from "@/lib/auth-utils"
import { redirect } from "next/navigation"

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()

  if (user) {
    redirect("/dashboard")
  }

  return <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40">{children}</div>
}
