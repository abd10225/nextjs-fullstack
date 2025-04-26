
import { NextResponse } from "next/server"
import Post from "@/models/Post"
import connect from "@/utils/db"

export const GET = async (request, {params})  => {
    const {id} = params
    try{
        await connect()

        const posts = await Post.findById(id)
        return NextResponse.json(posts, {status: 200})
        
    }catch(err){
        return NextResponse.json({error: "Internal Server Error", message: err.message}, {status: 500})
    }
}