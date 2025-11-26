import React from "react";

function Child({ onClick }) {
  console.log("Child Rendered");
  return (
    <div style={{ marginTop: 20 }}>
      <button onClick={onClick}>Child Button</button>
    </div>
  );
}

export default React.memo(Child);