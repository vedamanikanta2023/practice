import React from "react";

class Component1 extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      data: 10,
    };
  }

  render() {
    console.log("rendering method",this.state);
    return (
      <div>
        <h1>PureComponent</h1>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.setState({ data: 10})}>Update</button>
      </div>
    );
  }
}
export default Component1;
