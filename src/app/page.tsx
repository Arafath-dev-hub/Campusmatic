import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Basement from "../components/Basement";
import StudentHub from "../components/studenthub";
import Events from "../components/Events";
import NoticeBoard from "../components/NoticeBoard";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main className="bg-gradient-to-br from-[#18003d] via-[#30006b] to-[#0b0120] min-h-screen">
      <Navbar />
      <Hero />
      <Basement />
      <StudentHub />
      <Events />
      <NoticeBoard />
      <Stats />
      <Footer />
    </main>
  );
}