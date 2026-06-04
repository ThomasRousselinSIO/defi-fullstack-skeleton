import React from "react";
import HotelGrid from "../components/hotel/HotelGrid";
import BrandLogo from "../components/ui/BrandLogo";
import hotels from "../hotels.json";

const hotelPhotoSets: Record<number, string[]> = {
  1: [
    "photo-1494526585095-c41746248156",
    "photo-1512917774080-9991f1c4c750",
    "photo-1484154218962-a197022b5858",
    "photo-1493909842330-69e8f31989c6",
  ].map((id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`),
  2: [
    "photo-1505693416388-ac5ce068fe85",
    "photo-1542314836-8e7b60bb7f55",
    "photo-1500530855697-b586d89ba3ee",
    "photo-1455694135859-1be29d1e1b95",
  ].map((id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`),
  3: [
    "photo-1512912042-4f2ace3f0f87",
    "photo-1473625247510-8ceb1760943f",
    "photo-1494528876054-3cfde6346d5a",
    "photo-1522706604291-5b0cf97f0d0f",
  ].map((id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`),
  4: [
    "photo-1494520691531-4cf1e5d1afdb",
    "photo-1533779186857-00e42d6b2627",
    "photo-1496412705862-e0088f16f791",
    "photo-1490715016297-c69729d15129",
  ].map((id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`),
  5: [
    "photo-1512915452699-8b3261ceb0d9",
    "photo-1465414829459-b6b7d69b76c9",
    "photo-1490481651871-ab244e02d0a7",
    "photo-1512911919863-7f3236ed919d",
  ].map((id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`),
  6: [
    "photo-1493801973102-4f9d0f821a30",
    "photo-1504384308090-c894fdcc538d",
    "photo-1505691794842-c0fdf6b2cfe8",
    "photo-1472226624806-9c40d36a69a9",
  ].map((id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`),
  7: [
    "photo-1490133022411-df1d8c6a9de0",
    "photo-1494528682565-4166e1a94b4b",
    "photo-1500538318647-7befa74f1458",
    "photo-1505735097803-797c7ccf18c6",
  ].map((id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`),
  8: [
    "photo-1515170141590-5744c2cae7b7",
    "photo-1512918521240-6a70abb8e8c1",
    "photo-1505692417248-0ec7fa9c7bd8",
    "photo-1496245839260-0c8ef0c2d244",
  ].map((id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`),
  9: [
    "photo-1494520315526-65c5daa1b0d6",
    "photo-1505692794403-86a1840ed1d9",
    "photo-1512916204203-6c6df76ba9fe",
    "photo-1474528349378-4216d2555dce",
  ].map((id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`),
  10: [
    "photo-1491553895911-0055eca6402d",
    "photo-1506377247377-2a5b3b417ebb",
    "photo-1512912060902-c0a57c48f4b1",
    "photo-1505691938895-1758d7feb511",
  ].map((id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`),
};

const enrichedHotels = hotels.map((hotel) => ({
  ...hotel,
  photos:
    hotelPhotoSets[hotel.id] || [
      "photo-1490575434180-9d9f610f7b25",
      "photo-1438935687628-5f8dd6e667e8",
      "photo-1490521389501-a1b4f9d44a2c",
      "photo-1516011255310-0dd0d1c52f34",
    ].map((id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`),
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
                  src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80"
                  alt="Vue d'un hôtel haut de gamme"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-xl shadow-slate-950/20">
                <img
                  src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=80"
                  alt="Suite premium avec balcon"
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
