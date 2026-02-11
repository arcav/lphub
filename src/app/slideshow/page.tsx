import Link from "next/link";
import AutoSlideshow from "@/components/AutoSlideshow";
import sitesData from "@/data/sites.json";
import { Grid, X } from "lucide-react";

export default function SlideshowPage() {
  return (
    <main className="relative h-screen bg-[#191919] flex flex-col overflow-hidden">
      {/* Persistent Back to Grid Header */}
      <div className="absolute top-8 right-8 z-[100] flex items-center gap-4">
        <Link 
          href="/"
          className="group flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-condor-blue px-6 py-3 rounded-full text-[0.65rem] font-black uppercase tracking-widest backdrop-blur-xl transition-all duration-500 border border-white/10"
        >
          <Grid size={16} />
          Voltar para Grade
        </Link>
        <Link 
          href="/"
          className="flex items-center justify-center w-12 h-12 bg-condor-red text-white rounded-full hover:scale-110 transition-transform shadow-2xl"
        >
          <X size={24} />
        </Link>
      </div>

      <div className="flex-1">
        <AutoSlideshow sites={sitesData} />
      </div>

      {/* Elegant TV Frame Background/Ambient Shadow */}
      <div className="fixed inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.5)] z-40" />
    </main>
  );
}
