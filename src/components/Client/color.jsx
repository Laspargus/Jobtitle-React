import React, { Component } from "react";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastColor: "dark",
    };
  }

  changeColor = (e) => {
    this.setState({
      lastColor: e.target.id,
    });
  };

  render() {
    return (
      <div>
        <p>The last color clicked is {this.state.lastColor}</p>
        <button id="red" onClick={this.changeColor}>
          Red
        </button>
        <button id="green" onClick={this.changeColor}>
          Green
        </button>
        <button id="blue" onClick={this.changeColor}>
          Blue
        </button>
        <button id="yellow" onClick={this.changeColor}>
          Yellow
        </button>
      </div>
    );
  }
}

export default Color;
