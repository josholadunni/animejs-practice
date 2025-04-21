"use client";
import React, { useRef, useState, useEffect } from "react";
import { createTimer } from "animejs";

export default function Timer() {
  const root = useRef(null);
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    createTimer({
      duration: 1000,
      loop: true,
      frameRate: 30,
      onUpdate: (self) => setTime(self.currentTime),
      onLoop: (self) => {
        setCount(self.currentIteration);
      },
    });
  }, []);

  return (
    <div ref={root} className="flex flex-col justify-center h-screen">
      <div>
        <div className="flex justify-center pb-8">
          <div className="flex flex-col text-center">
            <h1 className="text-2xl">{time}</h1>
            <p>{`Iteration ${count}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
