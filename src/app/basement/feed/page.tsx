"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firestore";

import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

type Confession = {
  id: string;
  confession: string;
  department: string;
  year: string;
  gender: string;
  category?: string;
  createdAt?: any;
  likes?: number;
  views?: number;
  posted?: boolean;
};

export default function BasementFeedPage() {
  const [confessions, setConfessions] = useState<Confession[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadConfessions() {
      const q = query(
        collection(db, "confessions"),
        where("status", "==", "approved"),
        where("posted", "==", true),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      setConfessions(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Confession, "id">),
        }))
      );

      setLoading(false);
    }

    loadConfessions();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#090014] flex items-center justify-center text-white">
        Loading Confessions...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#090014] px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-10 text-center text-5xl font-black text-white">
          Campusmatic Basement
        </h1>

        <div className="space-y-6">
          {confessions.length === 0 && (
            <div className="rounded-2xl bg-white/5 p-8 text-center text-white/60">
              No confessions available.
            </div>
          )}

          {confessions.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-5 flex flex-wrap gap-3">
                <span className="rounded-full bg-purple-600 px-4 py-2 text-sm font-bold text-white">
                  {item.department}
                </span>

                <span className="rounded-full bg-pink-600 px-4 py-2 text-sm font-bold text-white">
                  {item.year}
                </span>

                <span className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-bold text-white">
                  {item.gender}
                </span>

                {item.category && (
                  <span className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-bold text-white">
                    {item.category}
                  </span>
                )}
              </div>

              <p className="whitespace-pre-wrap text-lg leading-8 text-white">
                {item.confession}
              </p>

              <div className="mt-6 flex items-center gap-6 text-white/70">
                

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(item.confession);
                    alert("Confession copied!");
                  }}
                  className="transition hover:text-yellow-400"
                >
                  📋 Copy
                </button>

                <button className="transition hover:text-green-400">
                  📤 Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}