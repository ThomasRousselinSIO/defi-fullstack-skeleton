import React from "react";
import HotelCard from "./HotelCard";

export default function HotelGrid({ hotels }: { hotels: any[] }) {
  return (
    <section className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hotels.map((h) => (
          <HotelCard key={h.id} hotel={h} />
        ))}
      </div>
    </section>
  );
}
