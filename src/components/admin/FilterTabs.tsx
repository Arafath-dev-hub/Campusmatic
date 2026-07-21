type Filter =
  | "pending"
  | "approved"
  | "posted"
  | "rejected";

interface FilterTabsProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

export default function FilterTabs({
  filter,
  setFilter,
}: FilterTabsProps) {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">

      <button
        onClick={() => setFilter("pending")}
        className={`rounded-xl px-6 py-3 font-bold transition ${
          filter === "pending"
            ? "bg-purple-600 text-white"
            : "bg-white/10 text-white"
        }`}
      >
        Pending
      </button>

      <button
        onClick={() => setFilter("approved")}
        className={`rounded-xl px-6 py-3 font-bold transition ${
          filter === "approved"
            ? "bg-green-600 text-white"
            : "bg-white/10 text-white"
        }`}
      >
        Approved
      </button>

      <button
        onClick={() => setFilter("posted")}
        className={`rounded-xl px-6 py-3 font-bold transition ${
          filter === "posted"
            ? "bg-blue-600 text-white"
            : "bg-white/10 text-white"
        }`}
      >
        Posted
      </button>

      <button
        onClick={() => setFilter("rejected")}
        className={`rounded-xl px-6 py-3 font-bold transition ${
          filter === "rejected"
            ? "bg-red-600 text-white"
            : "bg-white/10 text-white"
        }`}
      >
        Rejected
      </button>

    </div>
  );
}