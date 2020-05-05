import React, { Component } from "react";

class child extends Component {
  componentDidMount() {
    console.log("I'm mounting");
  }

  componentWillUnmount() {
    console.log("I'm unmounting");
  }
  render() {
    return <div>heyyyy ! I am a child.</div>;
  }
}

export default child;
