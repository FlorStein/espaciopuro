import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Espacio Puro — Arquitectura en Buenos Aires",
  description: "Estudio de arquitectura e interiores en Recoleta. Diseñamos lugares esenciales donde materia, luz y naturaleza encuentran su equilibrio.",
  metadataBase: new URL("https://espaciopuro.ar"),
  openGraph: {
    title: "Espacio Puro — Arquitectura",
    description: "Lugares esenciales donde materia, luz y naturaleza encuentran su equilibrio.",
    images: [{ url: "/og.png", width: 1536, height: 910, alt: "Espacio Puro — Arquitectura · Buenos Aires" }],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Espacio Puro — Arquitectura",
    description: "Lugares esenciales donde materia, luz y naturaleza encuentran su equilibrio.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
