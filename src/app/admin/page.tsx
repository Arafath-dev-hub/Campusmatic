"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { auth, db } from "@/lib/firestore";

import {
  onAuthStateChanged,
} from "firebase/auth";

import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import AdminHeader from "@/components/admin/AdminHeader";
import FilterTabs from "@/components/admin/FilterTabs";
import StatsCards from "@/components/admin/StatsCards";

type Filter =
  | "pending"
  | "approved"
  | "posted"
  | "rejected";

export default function AdminPage() {

  const router = useRouter();

  const [checkingAuth, setCheckingAuth] =
    useState(true);

  const [filter, setFilter] =
    useState<Filter>("pending");

  const [confessions, setConfessions] =
    useState<any[]>([]);
    const [search, setSearch] = useState("");

  const [pendingCount, setPendingCount] =
    useState(0);

  const [approvedCount, setApprovedCount] =
    useState(0);
    const [postedCount, setPostedCount] =
  useState(0);

  const [rejectedCount, setRejectedCount] =
    useState(0);

  async function loadCounts() {

    const pendingSnap = await getDocs(
      query(
        collection(db, "confessions"),
        where("status", "==", "pending")
      )
    );

    const approvedSnap = await getDocs(
  query(
    collection(db, "confessions"),
    where("status", "==", "approved"),
    where("posted", "==", false)
  )
);
    const postedSnap = await getDocs(
  query(
    collection(db, "confessions"),
    where("status", "==", "approved"),
    where("posted", "==", true)
  )
);

    const rejectedSnap = await getDocs(
      query(
        collection(db, "confessions"),
        where("status", "==", "rejected")
      )
    );

    setPendingCount(pendingSnap.size);
    setApprovedCount(approvedSnap.size);
    setPostedCount(postedSnap.size);
    setRejectedCount(rejectedSnap.size);

  }

  async function loadConfessions() {

 

let q;

if (filter === "posted") {

  q = query(
    collection(db, "confessions"),
    where("status", "==", "approved"),
    where("posted", "==", true),
    orderBy("createdAt", "desc")
  );

} else if (filter === "approved") {

  q = query(
    collection(db, "confessions"),
    where("status", "==", "approved"),
    where("posted", "==", false),
    orderBy("createdAt", "desc")
  );

} else {

  q = query(
    collection(db, "confessions"),
    where("status", "==", filter),
    orderBy("createdAt", "desc")
  );

}

  const snapshot = await getDocs(q);

  setConfessions(
    snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  );

}

// 👇 PASTE THIS HERE
async function updateStatus(
  id: string,
  status: "approved" | "rejected"
) {
  try {
    await updateDoc(doc(db, "confessions", id), {
  status,
  posted: false,
});

    loadCounts();
    loadConfessions();
  } catch (error) {
    console.error(error);
    alert("Failed to update status.");
  }
}

async function markAsPosted(id: string) {
  try {
    await updateDoc(doc(db, "confessions", id), {
      posted: true,
    });

    loadCounts();
    loadConfessions();

    alert("Marked as posted successfully.");
  } catch (error) {
    console.error(error);
    alert("Failed to mark as posted.");
  }
}
async function deleteConfession(id: string) {
  const confirmDelete = confirm(
    "Are you sure you want to permanently delete this confession?"
  );

  if (!confirmDelete) return;

  try {
    await deleteDoc(doc(db, "confessions", id));

    loadCounts();
    loadConfessions();

    alert("Confession deleted successfully.");
  } catch (error) {
    console.error(error);
    alert("Failed to delete confession.");
  }
}

useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(auth, (user) => {

        if (!user) {
          router.replace("/login");
          return;
        }

        setCheckingAuth(false);

        loadCounts();
        loadConfessions();

      });

    return () => unsubscribe();

  }, [filter]);

  if (checkingAuth) {

    return (
      <main className="flex min-h-screen items-center justify-center bg-[#090014] text-white">
        Checking authentication...
      </main>
    );

  }

    return (
    <main className="min-h-screen bg-[#090014] p-10 text-white">

      <div className="mx-auto max-w-7xl">

        <AdminHeader />

        <StatsCards
          pending={pendingCount}
          approved={approvedCount}
          posted={postedCount}
          rejected={rejectedCount}
        />

        <FilterTabs
          filter={filter}
          setFilter={setFilter}
        />
<input
  type="text"
  placeholder="Search confessions..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="mb-8 w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none focus:border-purple-500"
/>
        <div className="mt-10 space-y-6">

          {confessions.length === 0 && (
            <div className="rounded-2xl bg-white/5 p-8 text-center text-white/60">
              No confessions found.
            </div>
          )}

          {confessions
  .filter((item) => {
    const q = search.toLowerCase();

    return (
      item.confession?.toLowerCase().includes(q) ||
      item.department?.toLowerCase().includes(q) ||
      item.category?.toLowerCase().includes(q) ||
      item.year?.toLowerCase().includes(q) ||
      item.gender?.toLowerCase().includes(q)
    );
  })
  .map((item) => (

            <div
              key={item.id}
              className="rounded-3xl border border-purple-500/20 bg-white/5 p-8"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p>
                    <strong>Department:</strong>{" "}
                    {item.department}
                  </p>

                  <p>
                    <strong>Year:</strong>{" "}
                    {item.year}
                  </p>

                  <p>
                    <strong>Gender:</strong>{" "}
                    {item.gender}
                  </p>
                  <div className="mt-2 rounded-xl bg-black/20 p-3 text-sm text-white/70">
  <p>
    📅{" "}
    {item.createdAt?.toDate
      ? item.createdAt.toDate().toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : "Loading..."}
  </p>

  <p className="mt-1">
    🕒{" "}
    {item.createdAt?.toDate
      ? item.createdAt.toDate().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        })
      : ""}
  </p>
</div>

                </div>

                <div>

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-bold ${
                      item.status === "approved"
                        ? "bg-green-600"
                        : item.status === "rejected"
                        ? "bg-red-600"
                        : "bg-purple-600"
                    }`}
                  >
                    {item.status}
                  </span>

                </div>

              </div>

              <div className="mt-6 whitespace-pre-wrap rounded-2xl bg-black/30 p-6">
                {item.confession}
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
              <button
  onClick={() => {
    navigator.clipboard.writeText(item.confession);
    alert("Confession copied!");
  }}
  className="rounded-xl bg-purple-600 px-6 py-3 font-bold transition hover:bg-purple-700"
>
  📋 Copy
</button>
<button
  onClick={() => deleteConfession(item.id)}
  className="rounded-xl bg-red-800 px-6 py-3 font-bold transition hover:bg-red-900"
>
  🗑 Delete
</button>

             {filter === "pending" && (
                  <>
                    <button
                      onClick={() => updateStatus(item.id, "approved")}
                      className="rounded-xl bg-green-600 px-6 py-3 font-bold transition hover:bg-green-700"
                    >
                      ✅ Approve
                    </button>

                    <button
                      onClick={() => updateStatus(item.id, "rejected")}
                      className="rounded-xl bg-red-600 px-6 py-3 font-bold transition hover:bg-red-700"
                    >
                      ❌ Reject
                    </button>
                  </>
                )}

                {filter === "approved" && !item.posted && (
  <button
    onClick={() => markAsPosted(item.id)}
    className="rounded-xl bg-blue-600 px-6 py-3 font-bold transition hover:bg-blue-700"
  >
    📸 Mark as Posted
  </button>
)}

</div>

</div>

))}

</div>

</div>

</main>
);
}
              

