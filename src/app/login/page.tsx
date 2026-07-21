"use client";

import { useState } from "react";
import { auth } from "@/lib/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      router.push("/admin");
    } catch (error) {
      alert("Invalid email or password.");
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#090014] px-6">

      <div className="w-full max-w-md rounded-3xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur-xl">

        <h1 className="text-center text-4xl font-black text-white">
          Admin Login
        </h1>

        <p className="mt-3 text-center text-white/60">
          Campusmatic Basement
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none focus:border-purple-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none focus:border-purple-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 py-4 font-bold text-white hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

      </div>

    </main>
  );
}