import { useEffect, useState } from "react";

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

  useEffect(() => {

    setInterval(()=>{
    setCount(prev=>prev+1);
  },1000)

  return () => console.log('Cleanup runs',count);
}, []);
  return (

    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>
        Count: {count}<br/>
        {value}
      </p>
    </div>
  );
};
