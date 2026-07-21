"use client";

import { useState } from "react";
import { db } from "@/lib/firestore";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function ConfessionForm() {
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [confession, setConfession] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submitConfession = async () => {
    if (confession.trim().length < 20) {
      alert("Please write at least 20 characters.");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "confessions"), {
        confession,
        department,
        year,
        gender,
        status: "pending",
        posted: false,
        likes: 0,
        views: 0,
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);

      setDepartment("");
      setYear("");
      setGender("");
      setConfession("");

    } catch (error) {
      console.error(error);
      alert("Failed to submit confession.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#090012] via-[#15002b] to-[#090012] px-6">

        <div className="max-w-xl rounded-3xl border border-purple-500/20 bg-white/5 p-10 text-center backdrop-blur-xl">

          <div className="text-6xl">
            🎉
          </div>

          <h1 className="mt-6 text-4xl font-black text-white">
            Confession Received
          </h1>

          <p className="mt-6 leading-8 text-white/70">
            Your confession has safely entered the Basement.
            <br />
            It will be reviewed before being posted on Instagram.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="mt-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 font-bold text-white"
          >
            Submit Another
          </button>

        </div>
      </main>
    );
  }
    return (
    <main className="min-h-screen bg-gradient-to-br from-[#090012] via-[#15002b] to-[#090012] py-20 px-6">

      <div className="mx-auto max-w-3xl">

        <h1 className="text-center text-5xl font-black text-white">
          Basement Confession
        </h1>

        <p className="mt-4 text-center text-white/60">
          Your confession is completely anonymous.
        </p>

        <div className="mt-12 rounded-3xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur-xl">

          {/* Department */}

          <label className="mb-2 block text-white font-semibold">
            Department (Optional)
          </label>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="mb-6 w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none"
          >
            <option value="">Select Department</option>
            <option>AIML</option>
            <option>CSE</option>
            <option>IT</option>
            <option>ECE</option>
            <option>EEE</option>
            <option>Mechanical</option>
            <option>Civil</option>
            <option>BME</option>
          </select>

          {/* Year */}

          <label className="mb-2 block text-white font-semibold">
            Year (Optional)
          </label>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="mb-6 w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none"
          >
            <option value="">Select Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>

          {/* Gender */}

          <label className="mb-2 block text-white font-semibold">
            Gender (Optional)
          </label>

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="mb-6 w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          {/* Confession */}

          <label className="mb-2 block text-white font-semibold">
            Your Confession
          </label>

          <textarea
            value={confession}
            onChange={(e) => setConfession(e.target.value)}
            maxLength={4500}
            rows={8}
            placeholder="Type your confession here..."
            className="w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none"
          />

          <div className="mt-2 text-right text-sm text-white/50">
            {confession.length}/4500
          </div>
                    <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">

            <h3 className="mb-3 text-lg font-bold text-yellow-300">
              Before you submit
            </h3>

            <ul className="space-y-2 text-sm text-white/70">
              <li>• Don't reveal someone's personal identity.</li>
              <li>• No hate speech or abusive content.</li>
              <li>• No illegal or dangerous content.</li>
              <li>• Every confession is reviewed before posting.</li>
            </ul>

          </div>

          <button
            onClick={submitConfession}
            disabled={loading}
            className="mt-8 w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-500 py-4 text-lg font-bold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Sending..." : "🚇 Send to Basement"}
          </button>

        </div>

      </div>

    </main>
  );
}