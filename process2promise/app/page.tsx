import { Footer } from "@/src/components/sections/Footer";
import { Header } from "@/src/components/sections/Header";
import Hero from "@/src/components/sections/Hero";
import { Highlights } from "@/src/components/sections/Hightlights";
import SpeakerSection from "@/src/components/sections/Speakers";
import { TransitionSection } from "@/src/components/sections/Transition";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <Hero />
      <Highlights />
      <SpeakerSection />
      {/* <TransitionSection /> */}
      <Footer />
    </main>
  );
}
