import React from "react";

class Phone extends React.Component {
  render() {
    let { phoneNumber } = this.props;
    let callto = "callto:" + phoneNumber;
    return (
      <div className="col-md-6">
        <a className="btn btn-primary col-md-6" href={callto}>
          Call
        </a>
      </div>
    );
  }
}

export default Phone;
