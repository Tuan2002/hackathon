import type React from "react"
import { NextAuthProvider } from "./session-provider"
import { TanstackProvider } from "./tanstack-provider"
import { ThemeProvider } from "@/components/theme-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthProvider>
      <TanstackProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </TanstackProvider>
    </NextAuthProvider>
  )
}
