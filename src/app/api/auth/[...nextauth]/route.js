import prisma from "@/utilities/connect";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"


const authOptions =  {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // GithubProvider({
    //     clientId: process.env.GITHUB_ID,
    //     clientSecret: process.env.GITHUB_SECRET,
    // }),
],
}

const handler = NextAuth(authOptions);

export { handler as GET , handler as POST }
export const getAuthSession = () => getServerSession(authOptions)
