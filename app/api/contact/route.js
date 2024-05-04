import {NextResponse} from "next/server";
import {connectMongoDB} from "@/mongodb";
import bcrypt from "bcryptjs"
import User from "@/models/user";
import Contacts from "@/models/contacts";

export async function  POST(req) {
    try{
        const {values} = await req.json()
        const { content, phone, email, adress, workingHours, messengers} = values

        console.log('values', values)

        await connectMongoDB()
        await Contacts.create({
            content,
            phone,
            email,
            adress,
            workingHours,
            messengers
        })

        return NextResponse.json({message: "Contacts created"}, { status: 201})
    } catch(err) {
        return NextResponse.json({message: "An error occurred while contacts created."}, {status: 500})
    }
}

export async function GET(req) {
    try {
        await connectMongoDB();
        const contacts = await Contacts.find();
        return NextResponse.json({ contacts }, { status: 200 });
    } catch(err) {
        return NextResponse.json({message: "An error occurred while fetching contacts."}, {status: 500});
    }
}

export const fetchContacts = async () => {
    const response = await fetch('/api/contacts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};