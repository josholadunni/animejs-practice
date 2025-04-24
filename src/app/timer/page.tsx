"use client";
import React, { useRef, useState, useEffect } from "react";
import { createTimer, Timer } from "animejs";

export default function TimerAnim() {
  const root = useRef(null);
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);
  const timer = useRef<Timer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  //Create timer on mount
  useEffect(() => {
    timer.current = createTimer({
      duration: 1000,
      loop: true,
      frameRate: 30,
      //When the timer updates, set the time state to the current time property.
      onUpdate: (self) => setTime(self.currentTime),
      //When it loops, set the count to the current iteration property
      onLoop: (self) => {
        setCount(self.currentIteration);
      },
    });
  }, []);

  //Pause/play the timer by changing the isPlaying state
  const handlePlayButtonClick = (): void => {
    setIsPlaying(!isPlaying);
  };

  //When isPlaying changes, play/pause the timer
  useEffect(() => {
    if (isPlaying) {
      timer.current?.play();
    } else {
      timer.current?.pause();
    }
  }, [isPlaying]);

  return (
    <div ref={root} className="flex flex-col justify-center h-screen">
      <div>
        <div className="flex justify-center pb-8">
          <div className="flex flex-col text-center">
            <h1 className="text-2xl font-bold">{time}</h1>
            <p>{`Iteration ${count}`}</p>
            <button
              className="mt-6 font-bold"
              onClick={() => handlePlayButtonClick()}
            >{`${isPlaying ? "Pause" : "Play"}`}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
