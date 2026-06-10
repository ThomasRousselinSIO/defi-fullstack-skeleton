import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const hotel = await prisma.hotel.findUnique({
    where: { id: Number(params.id) },
  });

  if (!hotel) {
    return NextResponse.json({ error: "Hotel not found" }, { status: 404 });
  }

  return NextResponse.json(hotel);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();

  const hotel = await prisma.hotel.update({
    where: { id: Number(params.id) },
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

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.hotel.delete({
    where: { id: Number(params.id) },
  });

  return NextResponse.json({ success: true });
}
