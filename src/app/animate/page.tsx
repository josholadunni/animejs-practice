"use client";
import React, { useRef, useEffect } from "react";
import { animate, utils } from "animejs";

export default function Animate() {
  const boxRef1 = useRef<HTMLDivElement | null>(null);
  const boxRef2 = useRef<HTMLDivElement | null>(null);
  const boxRef3 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (boxRef1.current) {
      animate(boxRef1.current, {
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

    if (boxRef2.current) {
      animate(boxRef2.current, {
        x: [
          { to: "-2.75rem", ease: "inBack", duration: "600" },
          { to: 0, ease: "inOutElastic", duration: 800, delay: 100 },
        ],
        rotate: "2turn",
        ease: "inOutCirc",
        loopDelay: 1000,
        loop: true,
      });
    }

    if (boxRef3.current) {
      // Set the CSS variables as properties on the animated elements
      utils.set(boxRef3.current, {
        "--radius": "4px",
        "--y": "0rem",
        "--pseudo-el-after-scale": "1", // applied to the pseudo element "::after"
        borderRadius: "var(--radius)",
        translateY: "var(--y)",
      });

      // Animate the values of the CSS variables
      animate(boxRef3.current, {
        "--radius": "20px",
        "--y": "16.5rem",
        "--pseudo-el-after-scale": "1.55", // Animates the ":after" pseudo element of the element
      });
    }

    // Animate all box4 data-ref elements
    const elements = document.querySelectorAll('[data-ref="box4"]');
    animate(elements, {
      y: ($el: unknown) =>
        parseInt(($el as HTMLElement).getAttribute("data-y") || "0"),
      x: (_: unknown, i: number) => 50 + -500 * i,
      rotate: "2turn",
      ease: "inOutCirc",
      loopDelay: 1000,
      loop: true,
    });
  }, []);

  return (
    <div className="w-full">
      <div ref={boxRef1} className=" bg-red-400 w-fit px-5 mx-auto mt-20">
        Animate
      </div>
      <div ref={boxRef2} className=" bg-red-400 w-fit px-5 mx-auto mt-20">
        Animate
      </div>
      <div ref={boxRef3} className=" bg-red-400 w-fit px-5 mx-auto mt-20">
        Animate
      </div>
      <div className="flex">
        <div
          data-ref="box4"
          data-y="100"
          className="bg-red-400 w-fit px-5 mx-auto mt-20"
        >
          Animate
        </div>
        <div
          data-ref="box4"
          data-y="200"
          className="bg-red-400 w-fit px-5 mx-auto mt-20"
        >
          Animate
        </div>
        <div
          data-ref="box4"
          data-y="300"
          className="bg-red-400 w-fit px-5 mx-auto mt-20"
        >
          Animate
        </div>
      </div>
    </div>
  );
}
