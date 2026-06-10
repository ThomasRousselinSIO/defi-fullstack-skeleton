import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const hotels = await prisma.hotel.findMany({ orderBy: { id: "desc" } });
  return NextResponse.json(hotels);
}

export async function POST(req: Request) {
  const body = await req.json();

  const hotel = await prisma.hotel.create({
    data: {
      name: body.name,
      city: body.city,
      price: Number(body.price),
      shortDescription: body.shortDescription,
      description: body.description,
      images: body.images,
    },
  });

  return NextResponse.json(hotel);
}
