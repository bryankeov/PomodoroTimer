import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Timer.css";

function Timer() {
  // const [onWork, setOnWork] = useState(60);
  // const [onBreak, setOnBreak] = useState(15);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [onBreak, setOnBreak] = useState(false);

  const timerMin = String(minutes).padStart(2, "0");
  const timerSec = String(seconds).padStart(2, "0");

  function handleStart() {
    clearInterval();
  }

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          setMinutes(onBreak ? 24 : 4);
          setSeconds(59);
          setOnBreak(!onBreak);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  console.log(`${timerMin}.${timerSec}`);

  return (
    <div className="timer-container">
      <button type="button" onClick={handleStart}>
        Start
      </button>
      <div className="bar-container">
        <h3>
          {!onBreak ? "Work time!" : "Time for a break, go stretch your legs!"}
        </h3>
        <CircularProgressbar
          value={`${timerMin}.${timerSec}`}
          maxValue={!onBreak ? 25 : 5}
          text={`${timerMin}:${timerSec}`}
          styles={buildStyles({
            pathColor: `#FF6347`,
            textColor: `#FF6347`,
          })}
        />
      </div>
    </div>
  );
}

export default Timer;
