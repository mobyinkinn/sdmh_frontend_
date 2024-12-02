"use client";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { Stack } from "@mui/system";
import { projects } from "./data";
import Card from "./Card";
import { careData } from "./CareData";
export default function CardScroll() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main
      ref={container}
      style={{
        position: "relative",
        marginTop: "10vh",
      }}
    >
      {careData.map((project, i) => {
        const targetScale = 1 - (careData.length - i) * 0.001;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
