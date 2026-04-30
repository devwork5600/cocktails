import HeroSection from "@/components/sections/Hero-Section";
import { MenuSection } from "@/components/sections/Menu-Section";
import AmbianceSection from "@/components/sections/Ambiance-Section";
import Reservation from "@/components/sections/Reservation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[200vh] scrollbar">
      <main className="grow">
        <HeroSection />
        <MenuSection />
        <Reservation />
        <AmbianceSection />
      </main>
    </div>
  );
}
