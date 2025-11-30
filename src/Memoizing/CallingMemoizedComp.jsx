import { useState } from "react";
import { MemoizedComp } from "./MemoizedComp";

export const CallingMemoizedComp = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <MemoizedComp count={count} />
      <p>{count * 2}</p>
      <button onClick={() => setCount((pre) => pre + 1)}>Increase</button>
    </>
  );
};
