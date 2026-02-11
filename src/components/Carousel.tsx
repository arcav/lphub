"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import SiteCard from "./SiteCard";
import sitesData from "@/data/sites.json";

import { useIsTV } from "@/hooks/useIsTV";

interface Site {
  name: string;
  company: string;
  url: string;
  production: string;
  description: string;
  status: string;
  thumbnail: string;
}

export default function Carousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const dragX = useMotionValue(0);
  const isTV = useIsTV();
  
  // Physics configuration for professional enterprise feel
  // TV: Stiffer, less bouncy for performance
  const springConfig = isTV ? { damping: 40, stiffness: 300, mass: 1 } : { damping: 30, stiffness: 150, mass: 0.2 };
  const x = useSpring(dragX, springConfig);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing select-none h-[65vh]">
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: -containerWidth, right: 0 }}
        style={{ x }}
        className="flex gap-8 px-[8vw] items-center h-full w-max"
      >
        {sitesData.map((site: Site, index: number) => (
          <SiteCard key={index} site={site} index={index} />
        ))}
      </motion.div>
      
      {/* Gradient Mask for Edges (Enterprise Style) */}
      <div className="absolute top-0 left-0 h-full w-[8vw] bg-linear-to-r from-enterprise-bg to-transparent pointer-events-none z-30" />
      <div className="absolute top-0 right-0 h-full w-[8vw] bg-linear-to-l from-enterprise-bg to-transparent pointer-events-none z-30" />
    </div>
  );
}
