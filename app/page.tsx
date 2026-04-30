import HeroSection from "@/components/sections/Hero-Section";
import { MenuSection } from "@/components/sections/Menu-Section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[200vh] scrollbar">
      <main className="grow">
        <HeroSection />
        <MenuSection />
      </main>
    </div>
  );
}
