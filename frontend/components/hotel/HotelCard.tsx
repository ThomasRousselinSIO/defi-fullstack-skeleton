import React from "react";

type Hotel = {
  id: number;
  name: string;
  city: string;
  country: string;
  description?: string;
  max_capacity?: number;
  price_per_night?: number;
  photos: string[];
};

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/85 shadow-2xl shadow-slate-950/30 ring-1 ring-white/10 transition hover:-translate-y-1 hover:shadow-cyan-500/20">
      <div className="grid gap-1 sm:grid-cols-2">
        {hotel.photos.slice(0, 4).map((photo, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={photo}
              alt={`${hotel.name} photo ${index + 1}`}
              className="h-36 w-full object-cover transition duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white">{hotel.name}</h3>
            <p className="text-sm text-cyan-300">{hotel.city}, {hotel.country}</p>
          </div>
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            {hotel.price_per_night}€ / nuit
          </span>
        </div>
        <p className="mb-4 text-sm leading-6 text-slate-300">{hotel.description}</p>
        <div className="flex items-center justify-between text-sm text-slate-400">
          <span>Capacité: {hotel.max_capacity}</span>
          <span className="rounded-full bg-white/5 px-3 py-1 text-cyan-100">best choice</span>
        </div>
      </div>
    </article>
  );
}
