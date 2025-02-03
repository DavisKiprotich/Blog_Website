import prisma from "@/utilities/connect";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { getServerSession } from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github" 


const authOptions =  {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
],
}

const handler = NextAuth(authOptions);

export { handler as GET , handler as POST }

// Modified this section to modify API routes to handle failures
export const getAuthSession = () => getServerSession(authOptions);
export default async function handler(req, res) {
  try {
    const categories = await prisma.category.findMany();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Database error:", error);
    res.status(200).json([]); // Return an empty array to keep app functional
  }
}
