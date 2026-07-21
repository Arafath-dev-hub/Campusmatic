"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/firestore";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    try {
      await signOut(auth);
      router.replace("/login");
    } catch (err) {
      console.error(err);
      alert("Logout failed.");
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-xl bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700"
    >
      Logout
    </button>
  );
}