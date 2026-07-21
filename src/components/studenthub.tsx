export default function StudentHub() {
  const cards = [
    {
      title: "🤖 Student AI",
      desc: "Assignments, coding, exams and semester guidance.",
    },
    {
      title: "🌱 Freshers AI",
      desc: "Campus guide, FAQs, departments and orientation.",
    },
    {
      title: "📢 Notices",
      desc: "Latest circulars and announcements.",
    },
    {
      title: "🎉 Events",
      desc: "Symposiums, workshops and hackathons.",
    },
    {
      title: "📚 Resources",
      desc: "Notes, PYQs and study materials.",
    },
    {
      title: "💡 Build Campusmatic",
      desc: "Suggest features and vote on ideas.",
    },
  ];

  return (
    <section className="mx-auto mt-32 max-w-7xl px-6">
      <div className="mb-14 text-center">
        <p className="uppercase tracking-[0.3em] text-purple-400">
          STUDENT HUB
        </p>

        <h2 className="mt-4 text-5xl font-black text-white">
          Everything You Need.
        </h2>

        <p className="mt-5 text-lg text-white/70">
          Explore every feature inside Campusmatic.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
          >
            <h3 className="text-2xl font-bold text-white">
              {card.title}
            </h3>

            <p className="mt-4 text-white/70">
              {card.desc}
            </p>

            <button className="mt-8 text-purple-300 transition group-hover:text-white">
              Explore →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}