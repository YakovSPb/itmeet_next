import {NextResponse} from "next/server";
import {connectMongoDB} from "@/mongodb";
import bcrypt from "bcryptjs"
import User from "@/models/user";

export async function  POST(req) {
    try{
        const {content} = await req.json()

        console.log('content', content)

        // await connectMongoDB()
        // await User.create({
        //     login: "Yakov123",
        //     email: "itmeetm@gmail.com",
        //     password: hashedPassword
        // })

        return NextResponse.json({message: "User register"}, { status: 201})
    } catch(err) {
        return NextResponse.json({message: "An error occurred while registering the user."}, {status: 500})
    }
}