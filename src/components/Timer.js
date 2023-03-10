import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Timer.css";

function Timer() {
  const [timer, setTimer] = useState(10);

  function startTimer() {
    setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    setTimer(timer);
  }

  // useEffect(() => {
  //   if (timer === 0) {
  //     clearInterval(timer);
  //   }
  // }, [timer]);

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  return (
    <div className="timer-container">
      <button type="button" onClick={startTimer}>
        Press Me
      </button>
      <div className="bar-container">
        <CircularProgressbar value={timer} maxValue={1500} text={timer} />
      </div>
    </div>
  );
}

export default Timer;
