import prisma from "@/utilities/connect"
import { NextResponse } from "next/server"

export const GET = async(req) => {

    const {searchParams} = new URL(req.url);
    const page = searchParams.get("page");

    const POST_PER_PAGE = 2;
    try {        
        const posts = await prisma.post.findMany(
            {
                take: POST_PER_PAGE,
                skip: (page - 1) * POST_PER_PAGE,
                orderBy: { createdAt: "desc" },
                include: {
                    author: true,
                    category: true,
                },
            }
        )
        
        return new NextResponse(
            JSON.stringify(posts, { status:200 })
        );
        
    } catch (error) {
        console.log(error)
        return new NextResponse(
            JSON.stringify({ message:"Something went wrong" }, { status:500 })
        );
    }
}