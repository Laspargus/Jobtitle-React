import React from "react";
class Job extends React.Component {
  render() {
    let { job } = this.props;
    return <h5 className="mt-3 card-title">{job}</h5>;
  }
}

export default Job;
