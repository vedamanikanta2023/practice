import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { count: "vedam" };
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.props.onClick}></button>
      </div>
    );
  }
}

export function ClassComponent() {
  const [count, setCount] = React.useState(0);
  const onClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div>{count}</div>
      <MyComponent onClick={onClick} />
    </>
  );
}
