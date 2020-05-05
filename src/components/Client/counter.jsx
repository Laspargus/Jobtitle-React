import React, { Component } from "react";
import Number from "./number";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: 0,
    };
  }

  increment = () => {
    this.setState({
      currentNumber: this.state.currentNumber + 1,
    });
  };

  decrement = () => {
    this.setState({
      currentNumber: this.state.currentNumber - 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <Number finalCount={this.state.currentNumber} />
      </div>
    );
  }
}

export default Counter;
