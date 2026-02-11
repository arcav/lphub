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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
