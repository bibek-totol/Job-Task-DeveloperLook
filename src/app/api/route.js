import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";



export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("listings");

    const listings = await collection.find({}).toArray();
    return NextResponse.json(listings);
  } catch (error) {
    console.error("MongoDB error:", error);
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }
}
