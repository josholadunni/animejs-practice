"use client";
import React, { useRef, useEffect } from "react";
import { animate } from "animejs";

export default function Animate() {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (boxRef.current) {
      animate(boxRef.current, {
        y: [
          { to: "-2.75rem", ease: "inBack", duration: "600" },
          { to: 0, ease: "inOutElastic", duration: 800, delay: 100 },
        ],
        rotate: {},
        ease: "inOutCirc",
        loopDelay: 1000,
        loop: true,
      });
    }
  }, []);

  return (
    <div className="w-full">
      <div
        ref={boxRef}
        className="anim-box bg-red-400 w-fit px-5 mx-auto mt-20"
      >
        Animate
      </div>
    </div>
  );
}
