import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials";
import {connectMongoDB} from "@/mongodb";
import bcrypt from "bcryptjs"
import User from "@/models/user";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials){
                const {login, password} = credentials

                try{
                    await connectMongoDB();
                    const user = await User.findOne({login})

                    if(!user) {
                        return null
                    }

                   const passwordsMatch = await bcrypt.compare(password, user.password)

                    if(!passwordsMatch){
                        return null
                    }

                    return user;
                } catch (error) {
                    console.log("Error: ", error)
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}

// export async function  POST(req) {
//     try{
//         const {login, password} = await req.json()
//        //  const hashedPassword = await bcrypt.hash("Porter5161741", 10)
//        //
//        // await connectMongoDB()
//        // await User.create({
//        //     login: "Yakov123",
//        //     email: "itmeetm@gmail.com",
//        //     password: hashedPassword
//        // })
//
//         return NextResponse.json({message: "Welcome Yakov"}, { status: 201})
//     } catch(err) {
//         return NextResponse.json({message: "An error occurred while login the user."}, {status: 500})
//     }
// }