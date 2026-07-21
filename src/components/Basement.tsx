import Image from "next/image";
import Link from "next/link";

export default function Basement() {
  return (
    <section className="mx-auto mt-28 max-w-7xl px-6">
      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* Left Side */}
        <div>

          <p className="uppercase tracking-[0.35em] text-purple-400">
            BASEMENT
          </p>

          <h2 className="mt-5 text-6xl font-black leading-tight text-white lg:text-7xl">
            Confess.
            <br />
            <span className="text-purple-400">Unload.</span>
            <br />
            Feel Free.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
            Share your thoughts anonymously.
            Every confession is reviewed before being published,ensuring a safe and respectful space for the SIMATS community.
          </p>

          {/* Button */}
          <div className="mt-10">
            <Link href="/basement">
              <button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_35px_rgba(168,85,247,0.45)] transition duration-300 hover:scale-105">
                🚪 Enter Basement
              </button>
            </Link>
          </div>

        </div>

        {/* Right Side */}
        <div className="group relative overflow-hidden rounded-[36px] border border-purple-500/20 bg-black/30 shadow-[0_0_80px_rgba(168,85,247,0.25)]">

          <div className="relative h-[720px] w-full">

            <Image
              src="/images/basement-v2.png"
              alt="Basement"
              fill
              priority
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover object-top transition duration-700 group-hover:scale-[1.02]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}