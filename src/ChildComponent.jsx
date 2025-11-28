import React from "react";

function Child({ onClick, title }) {

  return (
    <div style={{ marginTop: 20 }}>
      <p>{title}</p>
      <button onClick={onClick}>{title}</button>
      <button onClick={onClick}>Child Button</button>
    </div>
  );
}

export default React.memo(Child);
