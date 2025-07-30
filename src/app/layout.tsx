import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo_Black } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
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
        className={`${archivoBlack.variable} ${archivoBlack.variable} antialiased h-full `}
      >
        <div className="app-container max-w-[1220px] m-auto">{children}</div>
      </body>
    </html>
  );
}
