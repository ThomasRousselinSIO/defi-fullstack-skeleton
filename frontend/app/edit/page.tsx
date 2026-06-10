"use client";

import { useEffect, useState } from "react";
import { Trash2, Edit } from "react-icons/fa";

type Hotel = {
  id?: number;
  name: string;
  city: string;
  price: number;
  shortDescription: string;
  description: string;
  images: string[];
};

const emptyHotel: Hotel = {
  name: "",
  city: "",
  price: 0,
  shortDescription: "",
  description: "",
  images: [],
};

const API_BASE = "http://localhost:8000/api";

export default function EditPage() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [form, setForm] = useState<Hotel>(emptyHotel);
  const [loading, setLoading] = useState(false);

  async function loadHotels() {
    const res = await fetch(`${API_BASE}/hotels`);
    const data = await res.json();
    setHotels(data);
  }

  useEffect(() => {
    loadHotels();
  }, []);

  async function saveHotel() {
    setLoading(true);
    const method = form.id ? "PUT" : "POST";
    const url = form.id ? `${API_BASE}/hotels/${form.id}` : `${API_BASE}/hotels`;

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const error = await res.json();
        alert("Erreur: " + JSON.stringify(error));
        return;
      }

      setForm(emptyHotel);
      await loadHotels();
    } catch (error) {
      alert("Erreur: " + String(error));
    } finally {
      setLoading(false);
    }
  }

  async function deleteHotel(id: number) {
    if (confirm("Êtes-vous sûr?")) {
      try {
        await fetch(`${API_BASE}/hotels/${id}`, { method: "DELETE" });
        await loadHotels();
      } catch (error) {
        alert("Erreur: " + String(error));
      }
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold">Gérer les hôtels</h1>

        <div className="mb-12 rounded-2xl border border-white/10 bg-slate-900/70 p-8">
          <h2 className="mb-6 text-2xl font-semibold">
            {form.id ? "Modifier l'hôtel" : "Ajouter un nouvel hôtel"}
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nom"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Ville"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Prix par nuit"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
              className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Description courte"
              value={form.shortDescription}
              onChange={(e) => setForm({ ...form, shortDescription: e.target.value })}
              className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
            />
            <textarea
              placeholder="Description complète"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
            <textarea
              placeholder="URLs des images (séparées par des virgules)"
              value={form.images.join(", ")}
              onChange={(e) =>
                setForm({
                  ...form,
                  images: e.target.value.split(",").map((url) => url.trim()),
                })
              }
              className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />

            <button
              onClick={saveHotel}
              disabled={loading}
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 disabled:bg-slate-600"
            >
              {loading ? "Sauvegarde..." : form.id ? "Modifier" : "Ajouter"}
            </button>

            {form.id && (
              <button
                onClick={() => setForm(emptyHotel)}
                className="w-full rounded-lg bg-slate-700 px-6 py-3 font-semibold hover:bg-slate-600"
              >
                Annuler
              </button>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Hôtels existants</h2>
          {hotels.length === 0 ? (
            <p className="text-slate-400">Aucun hôtel pour le moment.</p>
          ) : (
            <div className="space-y-3">
              {hotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-900/70 p-4"
                >
                  <div>
                    <h3 className="font-semibold">{hotel.name}</h3>
                    <p className="text-sm text-slate-400">
                      {hotel.city} • {hotel.price}€ / nuit
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setForm(hotel)}
                      className="rounded-lg bg-blue-600 p-2 hover:bg-blue-700"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => deleteHotel(hotel.id!)}
                      className="rounded-lg bg-red-600 p-2 hover:bg-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
