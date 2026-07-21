interface StatsCardsProps {
  pending: number;
  approved: number;
  posted: number;
  rejected: number;
}

export default function StatsCards({
  pending,
  approved,
  posted,
  rejected,
}: StatsCardsProps) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

      <div className="rounded-2xl bg-purple-600 p-6 text-center">
        <p className="text-sm text-white/80">Pending</p>
        <h2 className="mt-2 text-4xl font-black">
          {pending}
        </h2>
      </div>

      <div className="rounded-2xl bg-green-600 p-6 text-center">
        <p className="text-sm text-white/80">Approved</p>
        <h2 className="mt-2 text-4xl font-black">
          {approved}
        </h2>
      </div>

      <div className="rounded-2xl bg-blue-600 p-6 text-center">
        <p className="text-sm text-white/80">Posted</p>
        <h2 className="mt-2 text-4xl font-black">
          {posted}
        </h2>
      </div>

      <div className="rounded-2xl bg-red-600 p-6 text-center">
        <p className="text-sm text-white/80">Rejected</p>
        <h2 className="mt-2 text-4xl font-black">
          {rejected}
        </h2>
      </div>

    </div>
  );
}