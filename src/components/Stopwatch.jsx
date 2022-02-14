import React, { useState, useEffect } from "react";
import styles from "./Stopwatch.module.css"

function Stopwatch() {
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let id = null;
    if (isTimerOn) {
      id = setInterval(() => {
        setCount((prev) => prev + 10);
      }, 10);
      setIsTimerOn(true);
    } else {
      clearInterval(id);
    }

    return () => {
      clearInterval(id);
    };
  }, [isTimerOn]);

  return (
    <div>
      <div className={styles.Timers}>
        <span>{("0" + Math.floor((count / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((count / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((count / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {!isTimerOn && count === 0 && (
          <button onClick={() => setIsTimerOn(true)}>Start</button>
        )}
        {isTimerOn && <button onClick={() => setIsTimerOn(false)}>Stop</button>}
        {!isTimerOn && count !== 0 && (
          <button onClick={() => setIsTimerOn(true)}>Resume</button>
        )}
        {!isTimerOn && count > 0 && (
          <button onClick={() => setCount(0)}>Reset</button>
        )}
      </div>
    </div>
  );
}

export default Stopwatch;
