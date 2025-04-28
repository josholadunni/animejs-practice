"use client";
import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

export default function Keyframes() {
  const keyframeCircle = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (keyframeCircle.current) {
      animate(keyframeCircle.current, {
        x: [0, 100, 300],
        duration: 3000,
      });
    }
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
