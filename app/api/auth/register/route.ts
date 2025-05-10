import { NextResponse } from "next/server"
import { z } from "zod"

import { db } from "@/lib/db"

const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, password } = userSchema.parse(body)

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    })

    if (existingUser) {
      return NextResponse.json({ message: "User with this email already exists" }, { status: 409 })
    }

    // Get the default user role
    let userRole = await db.role.findFirst({
      where: {
        name: "user",
      },
    })

    // Create the user role if it doesn't exist
    if (!userRole) {
      userRole = await db.role.create({
        data: {
          name: "user",
          description: "Default user role",
        },
      })
    }

    // Hash the password
    const hashedPassword = "123"

    // Create the user
    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        roleId: userRole.id,
      },
    })

    // Remove the password from the response
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(
      {
        user: userWithoutPassword,
        message: "User created successfully",
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating user:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Invalid request data", errors: error.errors }, { status: 400 })
    }

    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}
