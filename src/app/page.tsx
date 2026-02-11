import Link from "next/link";
import Image from "next/image";
import SiteCard from "@/components/SiteCard";
import sitesData from "@/data/sites.json";
import { Play } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F3F6F8] overflow-x-hidden tv-optimized">
      {/* Padrão de Grade Empresarial */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] enterprise-grid fixed" />

      {/* Layout de Conteúdo Principal */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Seção de Cabeçalho */}
        <header className="px-[5vw] pt-12 pb-8 flex justify-between items-end border-b border-black/[0.03] bg-white/50 backdrop-blur-md sticky top-0 z-40">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-condor-red" />
              <h1 className="text-sm font-black text-condor-blue uppercase tracking-[0.4em]">
                <div className="relative h-8 w-32">
                  <Image 
                    src="/logos/Logo-Grande.png" 
                    alt="Condor" 
                    fill 
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </h1>
            </div>
            <p className="text-5xl font-black text-[#191919] leading-none tracking-tighter">
              LPHUB <span className="text-condor-blue"> 2026</span>
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/slideshow"
              className="group flex items-center gap-4 bg-condor-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-condor-red transition-all duration-500 shadow-xl shadow-condor-blue/20 hover:scale-105"
            >
              <Play size={20} className="fill-current" />
              Iniciar Apresentação (Auto)
            </Link>
            
            <div className="hidden xl:flex items-center gap-4 bg-white px-6 py-3 rounded-full border border-black/5 shadow-sm">
               <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
               
            </div>
          </div>
        </header>

        {/* Área da Grade de Projetos - Aproveita todo o espaço */}
        <div className="flex-1 p-[4vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sitesData.map((site, index) => (
              <div key={index} className="flex justify-center">
                <SiteCard site={site} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Rodapé de Navegação */}
        <footer className="px-[5vw] py-12 flex justify-between items-center border-t border-black/5 bg-white/30">
          <div className="flex gap-16 items-center">
            
          </div>
          
          <div className="text-right">
             <p className="text-sm font-black text-condor-blue mb-0.5">© 2025 GRUPO ZONTA</p>
             <p className="text-[0.6rem] text-enterprise-muted uppercase tracking-[0.2em] font-medium italic">Inovação & Presença Digital</p>
          </div>
        </footer>
      </div>
      
      {/* Barra de Acento da Marca Lateral */}
      <div className="fixed top-0 left-0 w-1.5 h-screen bg-condor-red z-50 opacity-20" />
    </main>
  );
}
