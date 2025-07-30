import Link from "next/link";
import styles from "./page.module.css";
import HeroCircle from "../components/HeroCircle";

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
                  <svg
                    className={""}
                    viewBox="0 0 100 20"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <mask id="knockout-text-2">
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
                      fill="transparent"
                      mask="url(#knockout-text-2)"
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
      <section className="sobre relative text-justify bg-black text-white text-[14px] py-4 flex flex-col items-center pb-0">
        <p className="max-w-[45ch] mb-2">
          The Beacon® é uma agência de desenvolvimento web sediada em Amparo-SP,
          especializada em soluções digitais personalizadas. Unimos design
          criativo, tecnologia e estratégia para transformar a presença online
          de negócios, conectando marcas ao seu público com performance e
          propósito.
        </p>

        <Link
          href="/"
          className="border w-[200px] m-auto my-4 pt-[100%] text-[20px] flex justify-end  relative"
        >
          <span className="flex items-center absolute top-0 left-0 w-full justify-center">
            Sobre nós
          </span>
        </Link>

        <div className=" w-20 h-20  bottom-0  flex items-center justify-center text-2xl">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M7 10L12 15L17 10"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </div>
      </section>
    </main>
  );
}
