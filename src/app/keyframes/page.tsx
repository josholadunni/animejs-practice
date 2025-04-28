"use client";
import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

export default function Keyframes() {
  const keyframeCircle = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    //Define type for the animation function
    let animation: ReturnType<typeof animate>;
    //If the ref exists, assign animation function to typed variable
    if (keyframeCircle.current) {
      animation = animate(keyframeCircle.current, {
        //Array of numbers used as keyframes
        x: [0, 100, 300],
        y: [0, 100, 300],
        duration: 3000,
      });
    }

    //Cleanup function
    return () => {
      //If there's an animation function, cancel it
      if (animation) animation.cancel();
    };
  }, []);

  return (
    <div
      ref={keyframeCircle}
      className="bg-blue-700 w-fit mt-10 mx-auto px-5 py-2 rounded-full text-white"
    >
      Keyframes
    </div>
  );
}
