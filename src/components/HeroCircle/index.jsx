"use client";

import { useState, useEffect } from "react";
import styles from "./heroCircle.module.css";
const CIRCLE_COLORS = ["#FFCC00", "#FFDD53"]; // alternância de cores

const HeroCircle = () => {
  const [layers, setLayers] = useState(1);
  const [isGrowing, setIsGrowing] = useState(false);

  const maxLayers = 21;

  const handleScroll = (e) => {
    if (isGrowing || layers >= maxLayers) return; // previne múltiplas ativações
    e.preventDefault();
    setIsGrowing(true);

    setTimeout(() => {
      setLayers((prev) => prev + 1);
      setIsGrowing(false);
    }, 100); // tempo da animação
  };

  useEffect(() => {
    if (layers >= maxLayers) {
      console.log("pit");
      document.body.style.overflow = "auto";
      console.log("stop");
    }
  }, [layers]);

  useEffect(() => {
    if (layers >= maxLayers) return;
    window.addEventListener("wheel", handleScroll, { passive: false });
    console.log(layers);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isGrowing]);
  return (
    // <div
    //   style={{ width: `${circleWidth}px`, height: `${circleHeight}px` }}
    //   className={styles["light-circle"]}
    // ></div>
    <div
      style={{ width: "min(10vw, 130px)", height: "min(10vw, 130px)" }}
      className={`absolute top-[18%] right-[20%] `}
    >
      {Array.from({ length: layers }).map((_, i) => (
        <div
          key={i}
          style={{
            mixBlendMode: "screen",
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            transform: `translate(-50%, -50%) scale(${1 + i * 0.8})`,
            borderRadius: "50%",
            backgroundColor: CIRCLE_COLORS[i % 2],
            zIndex: -i,
            transition: "transform 0.3s ease-out",
          }}
        />
      ))}
    </div>
  );
};

export default HeroCircle;
