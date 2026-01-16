// import { Agenda } from "@/src/components/sections/Agenda";
import { Footer } from "@/src/components/sections/Footer";
import { Header } from "@/src/components/sections/Header";
import Hero from "@/src/components/sections/Hero";
import { Highlights } from "@/src/components/sections/Hightlights";
// import { LiveStream } from "@/src/components/sections/LiveStream";
// import { ProcessCommitment } from "@/src/components/sections/ProcessCommitment";
import { SpeakerSection } from "@/src/components/sections/Speakers";
// import { TransitionSection } from "@/src/components/sections/Transition";
// import { UrgentBanner } from "@/src/components/sections/UrgentBanner";
import { Vision } from "@/src/components/sections/Vision";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      {/* <UrgentBanner /> */}
      <Header />
      {/* <LiveStream /> */}
      <Hero />
      <Vision />
      <Highlights />
      {/* <Agenda /> */}
      <SpeakerSection />
      {/* <ProcessCommitment /> */}
      {/* <TransitionSection /> */}
      <Footer />
    </main>
  );
}
