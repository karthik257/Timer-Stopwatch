import React, { useState, useEffect } from "react";
import styles from "./Test.module.css"

function Timer() {
  const [time, setTime] = useState(0);
  const [isTimeron, setIsTimeron] = useState(false);

  useEffect(() => {
    let id = null;
    if (isTimeron) {
      id = setInterval(() => {
        setTime((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(id);
            return 0;
          }
        });
      }, 1000);
      setIsTimeron(true);
    } else {
      clearInterval(id);
      setIsTimeron(false);
    }

    return () => {
      clearInterval(id);
    };
  }, [isTimeron]);

  return (
    <div className={styles.timerDiv}>
      <input
        type="text"
        value={time}
        onChange={(e) => setTime(e.currentTarget.value)}
      />
      {!isTimeron && time !== 0 && (
        <button onClick={() => setIsTimeron(true)}>Start</button>
      )}
      {isTimeron && <button onClick={() => setIsTimeron(false)}>Stop</button>}
      {time !== 0 && (
        <button
          onClick={() => {
            setIsTimeron(false);
            setTime(0);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default Timer;
