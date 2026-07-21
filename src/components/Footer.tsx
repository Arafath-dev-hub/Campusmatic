export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-[#090012]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">

        {/* Logo */}
        <div>
          <img
            src="/logos/campusmatic-logo.png"
            alt="Campusmatic"
            className="h-16"
          />

          <h2 className="mt-4 text-2xl font-bold text-white">
            Campusmatic
          </h2>

          <p className="mt-4 text-white/60">
            The digital home of the SIMATS student community.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">
            Explore
          </h3>

          <ul className="space-y-3 text-white/60">
            <li>Basement</li>
            <li>Student AI</li>
            <li>Freshers AI</li>
            <li>Events</li>
            <li>Notice Board</li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">
            Community
          </h3>

          <ul className="space-y-3 text-white/60">
            <li>Suggestions</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">
            Contact
          </h3>

          <p className="text-white/60">
            support@campusmatic.in
          </p>

          <p className="mt-3 text-white/60">
            SIMATS Engineering
          </p>
        </div>

      </div>

      <div className="border-t border-white/10 py-8 text-center text-white/50">
        © 2026 Campusmatic • Made with ❤️ for SIMATS Students
      </div>
    </footer>
  );
}