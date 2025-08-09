import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";

export const archivoBlack = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Beacon",
  description: "Desenvolva o site dos seus sonhos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="h-full">
      <body
        className={`${archivoBlack.className} ${archivoBlack.className} antialiased h-full `}
      >
        <div className="app-container max-w-[1220px] m-auto">{children}</div>
      </body>
    </html>
  );
}
