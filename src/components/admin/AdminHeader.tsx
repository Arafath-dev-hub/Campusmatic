import LogoutButton from "./LogoutButton";

export default function AdminHeader() {
  return (
    <div className="mb-10 flex items-center justify-between">
      <div>
        <h1 className="text-5xl font-black text-white">
          Campusmatic Admin
        </h1>

        <p className="mt-2 text-white/60">
          Moderate anonymous confessions
        </p>
      </div>

      <LogoutButton />
    </div>
  );
}