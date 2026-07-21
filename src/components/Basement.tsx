import Image from "next/image";
import Link from "next/link";

export default function Basement() {
  return (
  <section
    id="basement"
    className="relative mt-28 overflow-hidden lg:mx-auto lg:max-w-7xl lg:px-6"
  >

    {/* Mobile Background */}
    <div className="absolute inset-0 lg:hidden">
      <Image
        src="/images/basement-v2.png"
        alt="Basement"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#120028]/90 via-[#1a0038]/80 to-[#120028]/90" />
    </div>

    <div className="relative z-10 grid items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-0">

      {/* LEFT */}
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
          Every confession is reviewed before being published,
          ensuring a safe and respectful space for the SIMATS community.
        </p>

        <div className="mt-10">
          <Link href="/basement">
            <button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_35px_rgba(168,85,247,0.45)] transition duration-300 hover:scale-105">
              🚪 Enter Basement
            </button>
          </Link>
        </div>

      </div>

      {/* RIGHT IMAGE (Desktop only) */}
      <div className="relative hidden overflow-hidden rounded-[36px] border border-purple-500/20 bg-black/30 shadow-[0_0_80px_rgba(168,85,247,0.25)] lg:block">

        <div className="relative h-[720px]">

          <Image
            src="/images/basement-v2.png"
            alt="Basement"
            fill
            className="object-cover object-top"
          />

        </div>

      </div>

    </div>

  </section>
);
}