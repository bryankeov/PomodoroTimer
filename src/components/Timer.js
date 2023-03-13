import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Timer.css";

function Timer() {
  const [onWork, setOnWork] = useState(60);
  const [onBreak, setOnBreak] = useState(15);

  function handleStart() {
    if (onWork > 0) {
      setInterval(() => {
        setOnWork((onWork) => onWork - 1);
      }, 1000);
      setOnWork(onWork);
    } else if (onWork <= 0) {
      setInterval(() => {
        setOnBreak((onBreak) => onBreak - 1);
      }, 1000);
      setOnBreak(onBreak);
    }
  }

  useEffect(() => {
    if (onWork <= 0) {
      clearInterval(onWork);
      setOnBreak(15);
      alert("Press Start to begin your break");
    }
  }, [onWork]);

  useEffect(() => {
    if (onBreak <= 0) {
      clearInterval(onBreak);
      setOnWork(60);
    }
  }, [onBreak]);

  useEffect(() => {
    return () => clearInterval(onWork);
  }, [onWork]);

  useEffect(() => {
    return () => clearInterval(onBreak);
  }, [onBreak]);

  return (
    <div className="timer-container">
      <button type="button" onClick={handleStart}>
        Press Me
      </button>
      <div className="bar-container">
        <h4>{onWork <= 0 ? "Break Time" : "Work Time"}</h4>
        <CircularProgressbar
          value={onWork <= 0 ? onBreak : onWork}
          maxValue={1500}
          text={onWork <= 0 ? onBreak : onWork}
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
