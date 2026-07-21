import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/simats-hero.png"
        alt="SIMATS Engineering"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-purple-950/70" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center text-white lg:flex-row lg:justify-between">

        {/* Left Side */}
        <div className="max-w-2xl">

          <p className="mb-4 uppercase tracking-[0.35em] text-purple-300">
            Built for the SIMATS Community
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Campusmatic
          </h1>

          <h2 className="mt-4 text-3xl font-bold text-purple-300 md:text-5xl">
            One Campus.
            <br />
            Infinite Stories.
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/80">
            One platform for anonymous confessions, student discussion, freshers support, 
            announcements, events and everything that matters inside SIMATS-all in one place.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">

            <button className="rounded-full bg-purple-600 px-8 py-4 font-semibold transition hover:bg-purple-500">
              Share Confession
            </button>

            <button className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur-md transition hover:bg-white/20">
              Explore Campus
            </button>

          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">

            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
              100% Anonymous
            </span>

            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
              Student Community
            </span>

            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
              Secure Platform
            </span>

          </div>

        </div>

        {/* Right Side Card */}
        <div className="mt-16 hidden w-96 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl lg:block">

          <h3 className="text-3xl font-bold">
            Your Voice.
          </h3>

          <p className="mt-3 text-white/80">
            Share your thoughts freely.
            <br />
            No identity.
            <br />
            No judgement.
          </p>

          <div className="mt-10 space-y-6">

            <div>
              <p className="text-white/60">Anonymous</p>
              <h2 className="text-4xl font-black text-purple-300">
                100%
              </h2>
            </div>

            <div>
              <p className="text-white/60">Built For</p>
              <h2 className="text-4xl font-black text-cyan-300">
                SIMATS
              </h2>
            </div>

            <div>
              <p className="text-white/60">Mission</p>
              <h2 className="text-3xl font-black text-pink-300">
                Safe Space
              </h2>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}