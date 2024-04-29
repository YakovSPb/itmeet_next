import {NextResponse} from "next/server";
import {connectMongoDB} from "@/mongodb";
import bcrypt from "bcryptjs"
import User from "@/models/user";

export async function  POST(req) {
    try{
        const {login, password} = await req.json()
        const hashedPassword = await bcrypt.hash(password, 10)
        const existingUser = await User.findOne({ login });

        if(login !== 'Yakov123'){
            return NextResponse.json({message: "You are not Yakov"}, {status: 404})
        }

        if(existingUser){
            return NextResponse.json({message: "Error checking user existence"}, {status: 404})
        }

       await connectMongoDB()
       await User.create({
           login: "Yakov123",
           email: "itmeetm@gmail.com",
           password: hashedPassword
       })

        return NextResponse.json({message: "User register"}, { status: 201})
    } catch(err) {
        return NextResponse.json({message: "An error occurred while registering the user."}, {status: 500})
    }
}