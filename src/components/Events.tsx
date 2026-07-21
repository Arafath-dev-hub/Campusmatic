export default function Events() {
  const events = [
    {
      title: "NEXTORA 2026",
      date: "28 AUG",
      venue: "SIMATS Auditorium",
      seats: "250 Seats",
    },
    {
      title: "AI Workshop",
      date: "02 SEP",
      venue: "AIML Block",
      seats: "80 Seats",
    },
    {
      title: "Campus Hackathon",
      date: "15 SEP",
      venue: "Innovation Lab",
      seats: "120 Seats",
    },
  ];

  return (
    <section className="mx-auto mt-32 max-w-7xl px-6">

      <div className="text-center">
        <p className="uppercase tracking-[0.3em] text-purple-400">
          EVENTS
        </p>

        <h2 className="mt-3 text-5xl font-black text-white">
          Upcoming Events
        </h2>

        <p className="mt-5 text-white/70">
          Don't miss what's happening around SIMATS.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {events.map((event) => (
          <div
            key={event.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
          >
            <p className="text-purple-400 font-bold">
              {event.date}
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {event.title}
            </h3>

            <p className="mt-5 text-white/70">
              📍 {event.venue}
            </p>

            <p className="mt-2 text-white/70">
              👥 {event.seats}
            </p>

            <button className="mt-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-semibold text-white transition hover:scale-105">
              Register Now
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}