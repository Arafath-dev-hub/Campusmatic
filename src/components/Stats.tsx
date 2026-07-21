export default function Stats() {
  const stats = [
    {
      number: "15K+",
      title: "Students",
    },
    {
      number: "3K+",
      title: "Anonymous Posts",
    },
    {
      number: "120+",
      title: "Events",
    },
    {
      number: "24/7",
      title: "AI Support",
    },
  ];

  return (
    <section className="mx-auto mt-32 max-w-7xl px-6">

      <div className="text-center">
        <p className="uppercase tracking-[0.3em] text-purple-400">
          CAMPUSMATIC
        </p>

        <h2 className="mt-3 text-5xl font-black text-white">
          Trusted By Students
        </h2>

        <p className="mt-5 text-white/70">
          One platform. Every student. Every story.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">

        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
          >
            <h3 className="text-5xl font-black text-purple-400">
              {item.number}
            </h3>

            <p className="mt-4 text-white/70">
              {item.title}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}