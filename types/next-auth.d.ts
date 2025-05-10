import { Role } from "@prisma/client"
import type { DefaultSession } from "next-auth"
declare module "next-auth" {
    interface Session {
        user: {
            role?: Role
        } & DefaultSession["user"]
        expires: ISODateString,
    }
    interface User {
        role?: Role
    }
}