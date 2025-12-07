import React from "react";

class MyComponent extends React.Component {
  state = { count: "vedam" };
  render() {
    return <div>{this.state.count}</div>;
  }
}

export function ClassComponent() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <div>{count}</div>
      <MyComponent />
    </>
  );
}
