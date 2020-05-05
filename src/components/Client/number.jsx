import React, { Component } from "react";

class Number extends React.Component {
  render() {
    let { finalCount } = this.props;
    return <div>{finalCount}</div>;
  }
}

export default Number;
