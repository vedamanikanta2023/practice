import { useEffect, useState } from "react";
let timerId;
export const Timer = () => {
  const [timerValue, setTimerValue] = useState(10);
  const [timerRunning, setTimerRunning] = useState(false);
  const runTimer = () => {
    setTimerRunning(true);
  };

  const updateTimer = () => {
    timerId = setInterval(() => {
      if (timerRunning) {
        console.log({timerId,timerValue})
        setTimerValue((timerValue) => timerValue - 1);
      }
    }, 1000);
  };

  useEffect(() => {
    clearInterval(timerId);
    updateTimer();
  }, [timerRunning]);

  useEffect(() => {
    if (timerValue < 1) {
      setTimerRunning(false);
      clearInterval(timerId);
      setTimerValue(10);
      alert("Timer stopped")
    }
  }, [timerValue]);

  return (
    <>
      <h1>{timerValue}</h1>
      <button
        disabled={timerRunning}
        onClick={() => {
          setTimerValue(10);
          setTimerRunning(false);
        }}
      >
        Reset
      </button>
      <button disabled={timerRunning} onClick={runTimer}>
        Start
      </button>
      <button
        disabled={!timerRunning}
        onClick={() => {
          setTimerRunning((prev) => !!!prev);
        }}
      >
        Stop
      </button>
    </>
  );
};
