import TradieHero from "@/components/tradie/Hero";
import TradieTrust from "@/components/tradie/Trust";
import TradieWhy from "@/components/tradie/Why";
import TradieHow from "@/components/tradie/How";
import TradieFinalCTA from "@/components/tradie/FinalCTA";
import TradieFooter from "@/components/tradie/Footer";

export default function TradiePage() {
  return (
    <main className="bg-white">
      <TradieHero />
      <TradieTrust />
      <TradieWhy />
      <TradieHow />
      <TradieFinalCTA />
      <TradieFooter />
    </main>
  );
}
