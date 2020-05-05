import React, { Component } from "react";
import Child from "./child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: true,
    };
  }

  componentDidUpdate() {
    console.log("I'm updating");
  }

  deleteChild = (e) => {
    e.preventDefault();
    this.setState({
      showChild: !this.state.showChild,
    });
  };

  render() {
    let child;
    if (this.state.showChild) {
      child = <Child />;
    } else {
      child = "";
    }
    return (
      <div>
        <button onClick={this.deleteChild}>Delete Child</button>
        {child}
      </div>
    );
  }
}

export default Parent;
