import { useState, useCallback } from "react";
// import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  // 🔥 useCallback memoizes this function
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Parent Component</h2>

      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>

      <input
        placeholder="Type something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* Child receives memoized function */}
      <Child onClick={handleClick} />
    </div>
  );
}import { useState, useCallback } from "react";
import Child from "./Child";
import ChildComponent from "./ChildComponent";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  // 🔥 useCallback memoizes this function
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  // 🔥 useMemo memoizes an expensive calculation  
  const doubledCount = useMemo(() => {
    console.log("useMemo recalculated...");
    return count * 2;
  }, [count]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Parent Component</h2>

      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <h3>Doubled Value (from useMemo): {doubledCount}</h3>

      <input
        placeholder="Type something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* Child receives memoized function */}
      <ChildComponent onClick={handleClick} />
    </div>
  );
}