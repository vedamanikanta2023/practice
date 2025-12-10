import { useState } from "react";

function calculate() {
  console.log("running");
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result;
}
export const UseMemo = () => {
  const [count, setCount] = useState(0);
  const value = calculate();
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>
        Count: {count}
        {value}
      </p>
    </div>
  );
};
