import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Welcome to <span className="text-primary">Next.js App Template</span>
        </h1>
        <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-xl">
          A complete starter template with Next.js, Auth.js, Prisma, MongoDB, and shadcn/ui
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link href="/login">Get Started</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/about">Learn More</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-xl font-bold">Authentication</h3>
          <p className="text-muted-foreground">
            Multiple authentication providers including email/password, Google, and GitHub
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-xl font-bold">Role-Based Access</h3>
          <p className="text-muted-foreground">Different dashboards and features based on user roles</p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-xl font-bold">Modern Stack</h3>
          <p className="text-muted-foreground">Built with Next.js, TanStack Query, Prisma, and shadcn/ui</p>
        </div>
      </div>
    </div>
  )
}
