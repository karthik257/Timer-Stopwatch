import React, { useState } from "react";
import Stopwatch from "./Stopwatch";
import styles from "./Test.module.css";
import Timer from "./Timer";

function Test() {
  const [currTab, setCurrTab] = useState(1);

  const toggleHandle = (index) => {
    setCurrTab(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabSection}>
        <button className={styles.tab1} onClick={() => toggleHandle(1)}>
          Timer
        </button>
        <button className={styles.tab2} onClick={() => toggleHandle(2)}>
          Stopwatch
        </button>
      </div>

      <div className={styles.contentSection}>
        <div className={currTab === 1 ? styles.content1 : styles.nocontent}>
          <h1>Timer</h1>
          <Timer />

          {/* <Timer /> */}
        </div>
        <div className={currTab === 2 ? styles.content2 : styles.nocontent}>
          <h1>Stopwatch</h1>
          <Stopwatch />
        </div>
      </div>
    </div>
  );
}

export default Test;
