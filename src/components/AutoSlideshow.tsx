"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";

interface Site {
  name: string;
  company: string;
  url: string;
  production: string;
  description: string;
  status: string;
  thumbnail: string;
  screenshot?: string;
  video?: string;
  allowIframe?: boolean;
}

interface AutoSlideshowProps {
  sites: Site[];
}

export default function AutoSlideshow({ sites }: AutoSlideshowProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [progress, setProgress] = useState(0);

  const duration = 15000; // 15 segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % sites.length);
      setProgress(0);
    }, duration);

    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + (100 / (duration / 50)), 100));
    }, 50);

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [index, sites.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const currentSite = sites[index];

  return (
    <div className="relative w-full h-full bg-[#191919] overflow-hidden">
      {/* Progress Bar Header */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-white/10 z-[60]">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.05 }}
          className="h-full bg-condor-red"
        />
      </div>

      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200, damping: 30 },
            opacity: { duration: 0.4 }
          }}
          className="absolute inset-0 flex flex-col lg:flex-row"
        >
          {/* Site Demo Content (Simulation/Iframe) */}
          <div className="flex-4 h-full bg-white relative overflow-hidden group">
            {/* Elegant Overlay for transitioning */}
            <div className="absolute inset-0 bg-condor-blue/5 pointer-events-none z-10" />
            
            {/* Offline/Online Logic */}
            {currentSite.status === "Finalizado" ? (
              /* Offline State: Logo + Brand Background */
              <div className="w-full h-full relative bg-slate-50 flex flex-col items-center justify-center p-20">
                 <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-condor-blue to-transparent" />
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.8 }}
                   className="relative w-64 h-64 mb-8"
                 >
                   <img 
                     src={currentSite.thumbnail} 
                     alt={`${currentSite.name} Logo`}
                     className="w-full h-full object-contain filter drop-shadow-xl"
                   />
                 </motion.div>
                 
                 <div className="flex flex-col items-center gap-3 z-10">
                   <span className="text-condor-red font-black text-xs uppercase tracking-[0.5em]">Campanha Encerrada</span>
                   <h1 className="text-4xl text-enterprise-text font-black tracking-tighter">Fora do Ar</h1>
                   <div className="w-16 h-1 bg-condor-blue mt-4 rounded-full" />
                 </div>
              </div>
            ) : (
              /* Online State: Static Screenshot with Ken Burns Effect */
              <>
                <div className="w-full h-full relative overflow-hidden">
                  <motion.img 
                    src={currentSite.screenshot || currentSite.thumbnail} 
                    alt={currentSite.name}
                    initial={{ y: "0%" }}
                    animate={{ y: "-66%" }}
                    transition={{ duration: 15, ease: "linear", repeat: 0 }}
                    className="w-full min-h-full object-cover object-top"
                  />
                  {/* Subtle Gradient Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Simulated Live Connection Overlay - Only for Online Sites */}
                
              </>
            )}
          </div>

          {/* Site Info Sidebar - Reduced Width */}
          <div className="w-[280px] xl:w-[320px] h-full bg-[#F3F6F8] p-8 xl:p-10 flex flex-col justify-center border-l border-black/5 shadow-2xl z-20 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col h-full justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-1 bg-condor-red" />
                  <span className="text-[0.65rem] font-black text-condor-blue uppercase tracking-[0.3em] flex-1">
                    Apresentação Institucional
                  </span>
                  <div className={`px-2 py-0.5 rounded-full text-[0.5rem] font-black uppercase tracking-widest border ${
                    currentSite.status === "Online" ? "bg-green-100 text-green-700 border-green-200" :
                    "bg-orange-100 text-orange-700 border-orange-200"
                  }`}>
                    {currentSite.status === "Online" ? "No Ar" : "Finalizado"}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-8">
                  {/* Replaced Name with Logo */}
                  <div className="w-full h-32 relative flex items-center justify-start">
                    <img 
                      src={currentSite.thumbnail} 
                      alt={currentSite.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-md"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-sm xl:text-base text-enterprise-muted font-medium leading-relaxed">
                    {currentSite.description}
                  </p>

                  {/* Extended Metadata Table */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-6 pt-6 border-t border-black/5">
                    <div className="flex flex-col">
                      <p className="text-[0.6rem] font-black text-enterprise-muted uppercase tracking-widest mb-1.5 opacity-60">Empresa</p>
                      <p className="text-sm xl:text-base font-black text-condor-blue">{currentSite.company}</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[0.6rem] font-black text-enterprise-muted uppercase tracking-widest mb-1.5 opacity-60">Produção</p>
                      <p className="text-sm xl:text-base font-black text-[#191919]">{currentSite.production === "Interno" ? "Time Interno" : "Agência Parceira"}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 py-6">
                  <div className="flex-1 h-px bg-black/10" />
                  <span className="text-[0.65rem] font-black text-enterprise-muted uppercase tracking-widest">
                    {index + 1} / {sites.length}
                  </span>
                  <div className="flex-1 h-px bg-black/10" />
                </div>

                <div className="flex items-center justify-between gap-6">
                  <div className="flex gap-4">
                    <button 
                      onClick={() => { setDirection(-1); setIndex((prev) => (prev - 1 + sites.length) % sites.length); setProgress(0); }}
                      className="w-12 h-12 rounded-full border-2 border-condor-blue/10 flex items-center justify-center hover:bg-condor-blue hover:text-white transition-all duration-300 shadow-sm"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <button 
                      onClick={() => { setDirection(1); setIndex((prev) => (prev + 1) % sites.length); setProgress(0); }}
                      className="w-12 h-12 rounded-full border-2 border-condor-blue/10 flex items-center justify-center hover:bg-condor-blue hover:text-white transition-all duration-300 shadow-sm"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>

                  <a 
                    href={currentSite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 bg-condor-blue text-white px-6 py-3.5 rounded-full text-[0.7rem] font-black uppercase tracking-widest hover:bg-condor-red transition-all duration-500 shadow-lg shadow-condor-blue/20"
                  >
                    Acessar <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Corporate Accent */}
      
    </div>
  );
}
