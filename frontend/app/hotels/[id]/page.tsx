import { notFound } from "next/navigation";
import Carousel from "./Carousel";

interface Hotel {
  id: number;
  name: string;
  city: string;
  price: number;
  description: string;
  images: string[];
}

async function getHotel(id: string): Promise<Hotel> {
  const res = await fetch(`http://localhost:8000/api/hotels/${id}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch hotel");
  return res.json();
}

export default async function HotelPage({ params }: { params: { id: string } }) {
  const hotel = await getHotel(params.id);

  if (!hotel) notFound();

  const images = hotel.images || [];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl font-bold">{hotel.name}</h1>
            <p className="text-xl text-slate-400">{hotel.city}</p>
          </div>

          <Carousel images={images} />

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-8">
            <p className="text-lg leading-8 text-slate-300">{hotel.description}</p>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-8">
            <span className="text-2xl font-bold text-blue-400">{hotel.price} € / nuit</span>
            <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-700">
              Réserver
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
