import React from "react";
import HotelGrid from "../components/hotel/HotelGrid";
import BrandLogo from "../components/ui/BrandLogo";
import hotels from "../hotels.json";

const hotelPhotoSets: Record<number, string[]> = {
  1: [101, 102, 103, 104].map((id) => `https://picsum.photos/id/${id}/800/540`),
  2: [105, 106, 107, 108].map((id) => `https://picsum.photos/id/${id}/800/540`),
  3: [109, 110, 111, 112].map((id) => `https://picsum.photos/id/${id}/800/540`),
  4: [113, 114, 115, 116].map((id) => `https://picsum.photos/id/${id}/800/540`),
  5: [117, 118, 119, 120].map((id) => `https://picsum.photos/id/${id}/800/540`),
  6: [121, 122, 123, 124].map((id) => `https://picsum.photos/id/${id}/800/540`),
  7: [125, 126, 127, 128].map((id) => `https://picsum.photos/id/${id}/800/540`),
  8: [129, 130, 131, 132].map((id) => `https://picsum.photos/id/${id}/800/540`),
  9: [133, 134, 135, 136].map((id) => `https://picsum.photos/id/${id}/800/540`),
  10: [137, 138, 139, 140].map((id) => `https://picsum.photos/id/${id}/800/540`),
};

const enrichedHotels = hotels.map((hotel) => ({
  ...hotel,
  photos:
    hotelPhotoSets[hotel.id] || [101, 102, 103, 104].map((id) => `https://picsum.photos/id/${id}/800/540`),
}));

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-8 sm:pt-10 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <BrandLogo />
              <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Voyage de rêve dans les plus beaux hôtels du continent.
              </h1>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                Explore des établissements soigneusement sélectionnés, avec des ambiances chaleureuses, des vues sublimes et des services haut de gamme.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-xl shadow-slate-950/20">
                <img
                  src="https://picsum.photos/id/1018/900/600"
                  alt="Vue d un hotel chic"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-xl shadow-slate-950/20">
                <img
                  src="https://picsum.photos/id/1032/900/600"
                  alt="Appartement de luxe"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="mt-10" />
        <HotelGrid hotels={enrichedHotels} />
      </div>
    </main>
  );
}
