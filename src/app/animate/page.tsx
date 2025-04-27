"use client";
import React, { useRef, useEffect } from "react";
import { animate, utils } from "animejs";

export default function Animate() {
  const boxRef1 = useRef<HTMLDivElement | null>(null);
  const boxRef2 = useRef<HTMLDivElement | null>(null);
  const boxRef3 = useRef<HTMLDivElement | null>(null);
  const box4Elements = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  //Object to store the references used to attach to each animation
  const refs = {
    anim1: boxRef1,
    anim2: boxRef2,
    anim3: boxRef3,
    anim4: box4Elements,
  };

  //Array of animation instances
  const instances: ReturnType<typeof animate>[] = [];

  //UseEffect to add animation instances once mounted and references have been added.
  useEffect(() => {
    if (refs.anim1.current) {
      instances.push(
        animate(refs.anim1.current, {
          y: [
            { to: "-2.75rem", ease: "inBack", duration: "600" },
            { to: 0, ease: "inOutElastic", duration: 800, delay: 100 },
          ],
          rotate: {},
          ease: "inOutCirc",
          loopDelay: 1000,
          loop: true,
        })
      );
    }

    if (refs.anim2.current) {
      instances.push(
        animate(refs.anim2.current, {
          x: [
            { to: "-2.75rem", ease: "inBack", duration: "600" },
            { to: 0, ease: "inOutElastic", duration: 800, delay: 100 },
          ],
          rotate: "2turn",
          ease: "inOutCirc",
          loopDelay: 1000,
          loop: true,
        })
      );
    }

    if (refs.anim3.current) {
      // Set the CSS variables as properties on the animated elements
      utils.set(refs.anim3.current, {
        "--radius": "4px",
        "--y": "0rem",
        "--pseudo-el-after-scale": "1", // applied to the pseudo element "::after"
        borderRadius: "var(--radius)",
        translateY: "var(--y)",
      });

      // Animate the values of the CSS variables
      instances.push(
        animate(refs.anim3.current, {
          "--radius": "20px",
          "--y": "16.5rem",
          "--pseudo-el-after-scale": "1.55", // Animates the ":after" pseudo element of the element
        })
      );
    }

    refs.anim4.forEach((el, i) => {
      if (el.current) {
        instances.push(
          animate(el.current, {
            y: parseInt(el.current.dataset.y || "0"),
            x: 50 + -500 * i,
            rotate: "2turn",
            ease: "inOutBack",
            loopDelay: 1000,
            delay: () => utils.random(0, 400),
            loop: true,
            duration: 2000,
          })
        );
      }
    });
    //Cleanup function
    return () => {
      //Remove animations using references
      Object.values(refs).forEach((refs) => {
        if (Array.isArray(refs)) {
          refs.forEach((r) => {
            if (r.current) utils.remove(r.current);
          });
        } else if (refs.current) {
          utils.remove(refs.current);
        }
      });
      //Cancel instances
      instances.forEach((instance) => {
        instance.cancel();
      });
    };
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
        {[100, 200, 300].map((yValue, index) => (
          <div
            key={index}
            ref={box4Elements[index]}
            data-y={yValue}
            className="bg-red-400 w-fit px-5 mx-auto mt-20"
          >
            Animate
          </div>
        ))}
      </div>
    </div>
  );
}
