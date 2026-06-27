import { Topbar } from "@/components/Topbar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Fears } from "@/components/Fears";
import { Urgency } from "@/components/Urgency";
import { SocialProof } from "@/components/SocialProof";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { WhatsappFab } from "@/components/WhatsappFab";

export default function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        {/* Bloco 1 */}
        <Hero />
        {/* Bloco 2 */}
        <Fears />
        {/* Bloco 3 */}
        <Urgency />
        {/* Bloco 4 */}
        <SocialProof />
        {/* Bloco 5 */}
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
