/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Clock.css";
import Timer from "react-compound-timer";

export default function Clock({ startTime, onFinish }) {
  const initialTime = moment(startTime, "h:mm:ss");
  initialTime.subtract(moment().valueOf(), "millisecond");
  return (
    <Timer
      initialTime={initialTime.valueOf()}
      direction="backward"
      checkpoints={[
        {
          time: 2000,
          callback: () => {
            const time = moment(startTime, "h:mm:ss");
            time.subtract(moment().valueOf(), "millisecond");
            if (time.valueOf() > 0) onFinish();
          },
        },
      ]}
    >
      {() => (
        <React.Fragment>
          <div className="clockCountdownTraining">
            <Timer.Hours />:
            <Timer.Minutes />:
            <Timer.Seconds />
          </div>
        </React.Fragment>
      )}
    </Timer>
  );
}
