import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/mongodb"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    trustHost: true,
    
    session: {
        strategy: "jwt", // Use JWT so middleware can verify sessions in Edge Runtime without hitting the DB
    },
    
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        Facebook({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            // On first sign-in, `user` is available — persist id into the token
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            // With JWT strategy, use `token` (not `user`) to populate session
            if (session.user && token.id) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
    pages: {
        signIn: "/", // Since we use a modal on the home page
    },
})
