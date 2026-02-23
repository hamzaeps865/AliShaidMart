import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/mongodb"
import { authConfig } from "@/auth.config"

/**
 * Full server-side auth — includes MongoDB adapter.
 * Do NOT import this in middleware (Edge runtime incompatible).
 * Use auth.config.ts in middleware instead.
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    adapter: MongoDBAdapter(clientPromise),
})

