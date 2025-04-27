"use client";

import React, { useRef, useEffect } from "react";
import { animate } from "animejs";

export default function Composition() {
  const enter = { scale: 1.5, duration: 350 };
  const leave = { scale: 1.0, duration: 250 };

  const boxRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const enterBlend = () => {
    if (boxRefs[0].current) {
      animate(boxRefs[0].current, {
        composition: "blend",
        ...enter,
      });
    }
  };

  const leaveBlend = () => {
    if (boxRefs[0].current) {
      animate(boxRefs[0].current, {
        composition: "blend",
        ...leave,
      });
    }
  };

  useEffect(() => {
    for (const anim of boxRefs) {
      if (anim.current) {
        animate(anim.current, {
          scale: [0.5, 1],
          alternate: true,
          loop: true,
          duration: 750,
          composition: "blend",
        });
      }
    }
    // animate(boxRefs, {
    //   scale: [0.5, 1],
    //   alternate: true,
    //   loop: true,
    //   duration: 750,
    // });
  }, []);

  return (
    <div className="w-full flex justify-center mt-10">
      <div
        ref={boxRefs[0]}
        className="w-lg text-center"
        onMouseEnter={() => enterBlend()}
        onMouseLeave={() => leaveBlend()}
      >
        1
      </div>
      <div ref={boxRefs[1]} className="w-lg text-center">
        1
      </div>
      <div ref={boxRefs[2]} className="w-lg text-center">
        1
      </div>
    </div>
  );
}
