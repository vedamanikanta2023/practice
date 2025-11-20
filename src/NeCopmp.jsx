import { useEffect, useState } from "react";
let timerId;
export const Timer = () => {
  const [timerValue, setTimerValue] = useState(10);
  const [timerRunning, setTimerRunning] = useState(false);
  const runTimer = () => {
    setTimerRunning(true);
  };
  console.log(timerValue)
  const updateTimer = () => {
   timerId= setInterval(() => {
      setTimerValue(timerValue=>timerValue - 1);
    }, 1000);
  };

  useEffect(() => {
    if (timerRunning) {
      updateTimer();
    }

    return ()=>{
        // fetchign()
    }
  }, [timerRunning]);

  useEffect(() => {
    if (timerValue === 0) {
      setTimerRunning(false);
      clearInterval(timerId);
    }
  }, [timerValue]);

  return (
    <>
      <h1>{timerValue}</h1>
      <button disabled={timerRunning} onClick={runTimer}>
        Start Timer
      </button>
    </>
  );
};
