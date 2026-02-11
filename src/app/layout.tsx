import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfólio Institucional Condor",
  description: "Showcase corporativo das soluções digitais Condor, otimizado para LG 50\" UM7500PSB.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light">
      <body className="antialiased">
        {/* CRITICAL DEBUG: Force Red Background to verify CSS loading/rendering */}
        <style dangerouslySetInnerHTML={{ __html: `
          body { background-color: red !important; }
          .debug-indicator { 
            position: fixed; 
            top: 0; 
            left: 0; 
            background: yellow; 
            color: black; 
            z-index: 9999; 
            padding: 10px; 
            font-size: 20px; 
            font-weight: bold;
          }
        `}} />
        <div className="debug-indicator">TV MODE ACTIVE DEBUG</div>
        {children}
      </body>
    </html>
  );
}
