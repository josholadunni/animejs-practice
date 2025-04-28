"use client";
import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

export default function Keyframes() {
  const anim1 = useRef<HTMLDivElement | null>(null);
  const anim2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    //Array of animation instances
    const instances: ReturnType<typeof animate>[] = [];
    //If the ref exists, assign animation function to typed variable
    if (anim1.current) {
      instances.push(
        animate(anim1.current, {
          //Array of numbers used as keyframes
          x: [0, 100, 300],
          y: [0, 100, 300],
          scale: [1, 2, 1],
          duration: 2000,
          ease: "outBounce",
        })
      );
    }

    if (anim2.current) {
      instances.push(
        animate(anim2.current, {
          //Array of numbers used as keyframes
          x: [
            { to: "4rem", duration: 700, delay: 800 },
            { to: "10rem" },
            { to: "18.75rem" },
          ],
          y: [
            { to: "6rem", delay: 50 },
            { to: "16.5rem", delay: 500 },
          ],
          ease: "outBounce",
        })
      );
    }

    //Cleanup function
    return () => {
      //If there's an animation function, cancel it
      if (instances) {
        instances.forEach((instance) => instance.cancel());
      }
    };
  }, []);

  return (
    <>
      <div
        ref={anim1}
        className="bg-blue-700 w-fit mt-10 mx-auto px-5 py-2 rounded-full text-white"
      >
        Keyframes
      </div>
      <div
        ref={anim2}
        className="bg-green-700 w-fit mt-10 mx-auto px-5 py-2 rounded-full text-white"
      >
        Keyframes
      </div>
    </>
  );
}
