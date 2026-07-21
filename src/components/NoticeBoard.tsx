export default function NoticeBoard() {
  const notices = [
    {
      title: "Mid Semester Exams",
      date: "12 Aug 2026",
      type: "Academic",
    },
    {
      title: "Independence Day Holiday",
      date: "15 Aug 2026",
      type: "Holiday",
    },
    {
      title: "NEXTORA Registration Open",
      date: "18 Aug 2026",
      type: "Event",
    },
  ];

  return (
    <section className="mx-auto mt-32 max-w-7xl px-6">

      <div className="text-center">
        <p className="uppercase tracking-[0.3em] text-purple-400">
          NOTICE BOARD
        </p>

        <h2 className="mt-3 text-5xl font-black text-white">
          Latest Announcements
        </h2>

        <p className="mt-5 text-white/70">
          Stay updated with everything happening at SIMATS.
        </p>
      </div>

      <div className="mt-14 space-y-5">

        {notices.map((notice) => (
          <div
            key={notice.title}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
          >
            <div>
              <h3 className="text-xl font-bold text-white">
                {notice.title}
              </h3>

              <p className="mt-2 text-white/60">
                {notice.date}
              </p>
            </div>

            <span className="rounded-full bg-purple-600 px-4 py-2 text-sm text-white">
              {notice.type}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}