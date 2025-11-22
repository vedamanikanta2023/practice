import { useEffect, useState } from "react";

let timerId;

export const Timer = () => {
  const [timerValue, setTimerValue] = useState(10);
  const [timerRunning, setTimerRunning] = useState(false);
  const [items, setItems] = useState(["apple", "banana"]);

  const runTimer = () => {
    setTimerRunning(true);
  };

  const updateTimer = () => {
    timerId = setInterval(() => {
      if (timerRunning) {
        console.log({ timerId, timerValue, Timer });
        setTimerValue((timerValue) => timerValue - 1);
      }
    }, 1000);
  };

  const addOrange = () => {
    setItems((prevArr) => [...prevArr, "endra"]);
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
    }
  }, [timerValue]);

  return (
    <>
      <ol>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
      <button onClick={addOrange}>add orange</button>

      <h1>{timerValue}</h1>
      <div style={{"display":"flex", gap:"4px"}}>
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
          {timerValue !== 10 && !timerRunning ? "Resume" : "Start"}
        </button>
        <button
          disabled={!timerRunning}
          onClick={() => {
            setTimerRunning((prev) => !!!prev);
          }}
        >
          Stop
        </button>
      </div>
    </>
  );
};
