import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import { authOptions } from "./auth"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)
  return session?.user
}

export async function requireAuth() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  return user
}

export async function requireAdmin() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  return user
}
