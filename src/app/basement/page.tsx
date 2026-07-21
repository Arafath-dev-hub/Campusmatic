import Image from "next/image";
import Link from "next/link";

export default function BasementPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">

      {/* Background */}
      <Image
        src="/images/basement-v2.png"
        alt="Basement"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/80 to-black/90 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

        <div className="max-w-3xl text-center">

          <p className="uppercase tracking-[0.45em] text-purple-400">
            SIMATS UNDERGROUND
          </p>

          <h1 className="mt-5 text-7xl font-black text-white md:text-8xl">
            BASEMENT
          </h1>

          <p className="mt-8 text-xl leading-9 text-white/80">
            Not everyone reaches this place.
            <br />
            Inside the Basement, every confession is anonymous.
            <br />
            Your identity is never revealed.
          </p>

          {/* Status Card */}
          <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-purple-500/30 bg-white/10 p-8 backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,0.25)]">

            <h2 className="mb-6 text-2xl font-bold text-white">
              Access Status
            </h2>

            <div className="space-y-4 text-left text-lg text-white/90">

              <p>✅ SIMATS Student Access</p>

              <p>🔒 Anonymous Mode Enabled</p>

              <p>🛡 Identity Hidden</p>

              <p>🚇 Basement Ready</p>

            </div>

          </div>

          <Link href="/basement/confess">

            <button className="mt-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-12 py-5 text-xl font-bold text-white shadow-[0_0_40px_rgba(168,85,247,0.5)] transition duration-300 hover:scale-105">

              🚇 Open Basement Gate

            </button>

          </Link>

        </div>

      </div>

    </main>
  );
}