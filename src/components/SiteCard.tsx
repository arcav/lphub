"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface Site {
  name: string;
  company: string;
  url: string;
  production: string;
  description: string;
  status: string;
  thumbnail: string;
  screenshot?: string;
}

interface SiteCardProps {
  site: Site;
  index: number;
}

export default function SiteCard({ site, index }: SiteCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group relative w-full aspect-[4/5] bg-white border border-black/5 rounded-linkedin overflow-hidden flex flex-col p-0 card-shadow hover:shadow-2xl transition-all duration-500"
    >
      {/* Visual Header / Site Preview */}
      <div className="h-1/2 w-full bg-slate-100 overflow-hidden relative border-b border-black/[0.03]">
           <div className="relative w-full h-full">
             {/* Main Screenshot/Image */}
             <div className="absolute inset-0 bg-slate-100">
               {site.screenshot ? (
                 <Image 
                   src={site.screenshot} 
                   alt={`${site.name} preview`}
                   fill
                   className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   priority={index < 4}
                 />
               ) : (
                 <div className="w-full h-full flex items-center justify-center bg-slate-50">
                    <span className="text-slate-400">No Preview</span>
                 </div>
               )}
             </div>

             {/* Logo Removed */}
           </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className={`px-3 py-1 rounded-full text-[0.6rem] font-black uppercase tracking-widest border ${
            site.status === "Online" ? "bg-green-100 text-green-700 border-green-200" :
            site.status === "Novo" ? "bg-condor-blue text-white border-condor-blue" :
            "bg-orange-100 text-orange-700 border-orange-200"
          }`}>
            {site.status === "Online" ? "Disponível" : site.status === "Novo" ? "Novo" : "Finalizado"}
          </span>
        </div>

        {/* Brand Accent */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          className="absolute bottom-0 left-0 h-1 bg-condor-red z-20"
        />
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 flex flex-col">
        <div className="flex-1">
          <div className="flex justify-between items-start mb-4">
             <span className="text-condor-blue font-black tracking-[0.2em] text-[0.6rem] uppercase">
                {site.production === "Interno" ? "Projeto Interno" : `Caso ${site.production}`}
             </span>
             <span className="text-enterprise-muted text-[0.6rem] font-bold">#{String(index + 1).padStart(2, '0')}</span>
          </div>
          
          <h2 className="text-3xl font-black text-enterprise-text leading-none tracking-tighter mb-4 group-hover:text-condor-blue transition-colors">
            {site.name}
          </h2>
          
          <p className="text-enterprise-muted text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
            {site.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-black/5">
           <div className="flex flex-col">
              <p className="text-[0.6rem] font-bold text-enterprise-muted uppercase tracking-widest mb-2">Empresa</p>
              <div className="relative h-8 w-24">
                <Image 
                  src={site.thumbnail} 
                  alt={site.company}
                  fill
                  className="object-contain object-left"
                />
              </div>
           </div>
           
           <motion.a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "#D71920" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-condor-blue text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-colors shadow-lg shadow-condor-blue/20"
          >
            Visitar Site <ExternalLink size={16} />
          </motion.a>
        </div>
      </div>

      {/* Hipermais pattern accent */}
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-condor-blue opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
