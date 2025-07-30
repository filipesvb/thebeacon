import Link from "next/link";
import styles from "./page.module.css";
import HeroCircle from "../components/HeroCircle";
import TheBeacon from "../components/TheBeacon";
import { ArrowBottom } from "../components/ArrowBottom";
import { LinkButton } from "../components/LinkButton";

export default function Home() {
  return (
    <main className="">
      <section className={styles["top"]}>
        <div className={styles.center}>
          <video autoPlay loop muted>
            <source src="/nuvens.mp4" />
          </video>

          <div className="absolute top-0 left-0 w-full h-full ">
            <header className={styles.knockout}>
              <svg
                className={styles["knockout-text-container"]}
                viewBox="0 0 100 20"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <mask id="knockout-text">
                    <rect width="100%" height="100%" fill="#fff" />
                    <text
                      x="3.8"
                      y="20"
                      fill="#000"
                      fontSize="21.3"
                      fontFamily="Archivo Black"
                      textAnchor="start"
                      letterSpacing="-0.5"
                    >
                      BEACON
                    </text>
                  </mask>
                </defs>
                <rect
                  className="knockout-text-bg"
                  width="100%"
                  height="100%"
                  fill="#000"
                  mask="url(#knockout-text)"
                />
                <text
                  x="-2"
                  y="19.2"
                  fill="#FFF"
                  fontSize="7"
                  fontFamily="Archivo Black"
                  textAnchor="start"
                  letterSpacing="-0.5"
                  transform="rotate(-90, 2, 16)"
                >
                  THE
                </text>
              </svg>
            </header>

            <div className={styles.hero}>
              <div className="absolute top-0 left-0 w-full h-full z-[-10]">
                <div className="relative w-full top-0 left-0 h-full  ">
                  <TheBeacon />
                  <HeroCircle />
                </div>
              </div>
              <div className="w-[115%]">
                <img src="/beacon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sobre relative text-justify bg-black text-white text-[17px] py-4 flex items-center justify-between px-10 pb-20">
        <p className="max-w-160 mb-2">
          The Beacon® é uma agência de desenvolvimento web sediada em Amparo-SP,
          especializada em soluções digitais personalizadas. Unimos design
          criativo, tecnologia e estratégia para transformar a presença online
          de negócios, conectando marcas ao seu público com performance e
          propósito.
        </p>

        <LinkButton href={"/"}>Saiba mais</LinkButton>

        <div className=" w-20 h-20 absolute left-1/2 -translate-x-1/2  bottom-0  flex items-center justify-center text-2xl">
          <ArrowBottom />
        </div>
      </section>
    </main>
  );
}
