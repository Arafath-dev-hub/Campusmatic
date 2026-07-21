type Props = {
  confession: {
    id: string;
    confession: string;
    department: string;
    year: string;
    gender: string;
    category?: string;
  };
};

export default function ConfessionCard({ confession }: Props) {
  return (
    <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-6 backdrop-blur">
      <div className="mb-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-purple-600 px-3 py-1 text-sm font-semibold">
          {confession.department}
        </span>

        <span className="rounded-full bg-pink-600 px-3 py-1 text-sm font-semibold">
          {confession.year}
        </span>

        <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold">
          {confession.gender}
        </span>

        {confession.category && (
          <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-semibold">
            {confession.category}
          </span>
        )}
      </div>

      <p className="whitespace-pre-wrap leading-8 text-white">
        {confession.confession}
      </p>
    </div>
  );
}