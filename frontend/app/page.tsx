import Link from "next/link";
import BrandLogo from "../components/ui/BrandLogo";

interface Hotel {
  id: number;
  name: string;
  city: string;
  price: number;
  shortDescription: string;
  description: string;
  images: string[];
}

async function getHotels(): Promise<Hotel[]> {
  const res = await fetch("http://localhost:8000/api/hotels", {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch hotels");
  return res.json();
}

export default async function HomePage() {
  const hotels = await getHotels();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-8 sm:pt-10 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <BrandLogo />
              <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Nos hôtels
              </h1>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                Explore des établissements soigneusement sélectionnés, avec des ambiances chaleureuses, des vues sublimes et des services haut de gamme.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel) => (
            <Link key={hotel.id} href={`/hotels/${hotel.id}`}>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl shadow-slate-950/20 transition hover:border-white/20 hover:shadow-2xl">
                {hotel.images && hotel.images.length > 0 && (
                  <img
                    src={hotel.images[0]}
                    alt={hotel.name}
                    className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{hotel.name}</h3>
                  <p className="text-sm text-slate-400">{hotel.city}</p>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-300">{hotel.shortDescription}</p>
                  <p className="mt-4 text-lg font-bold text-blue-400">{hotel.price} € / nuit</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
