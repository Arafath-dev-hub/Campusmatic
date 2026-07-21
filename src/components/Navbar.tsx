export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-3 md:px-6">
      <div className="mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 md:px-8 md:py-4 backdrop-blur-3xl shadow-[0_0_60px_rgba(168,85,247,0.30)]">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
  src="/logos/campusmatic-logo.png"
  alt="Campusmatic"
  className="h-14 w-auto drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] transition duration-500 hover:scale-105"
/>

          <div>
            <h1 className="text-xl font-bold text-white">
              Campusmatic
            </h1>

            <p className="text-xs tracking-[0.25em] text-purple-300">
              SIMATS
            </p>
          </div>
        </div>

        {/* Navigation */}

        <nav className="hidden gap-8 text-white/80 lg:flex">
  <a
    href="#"
    className="text-white/80 transition-all duration-300 hover:text-purple-400 hover:scale-110"
  >
    Basement
  </a>

  <a
    href="#"
    className="text-white/80 transition-all duration-300 hover:text-purple-400 hover:scale-110"
  >
    Student Corner
  </a>

  <a
    href="#"
    className="text-white/80 transition-all duration-300 hover:text-purple-400 hover:scale-110"
  >
    Freshers
  </a>

  <a
    href="#"
    className="text-white/80 transition-all duration-300 hover:text-purple-400 hover:scale-110"
  >
    Events
  </a>

  <a
    href="#"
    className="text-white/80 transition-all duration-300 hover:text-purple-400 hover:scale-110"
  >
    Notices
  </a>
</nav>

        {/* Right Side */}

        <button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
          Share Confession
        </button>

      </div>
    </header>
  );
}