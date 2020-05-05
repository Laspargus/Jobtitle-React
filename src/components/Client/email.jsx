import React from "react";

class Email extends React.Component {
  render() {
    let { firstName, lastName } = this.props;

    let mailto =
      "mailto:" +
      firstName.toLowerCase() +
      "." +
      lastName.toLowerCase() +
      "@gmail.com";

    return (
      <div className="col-md-6">
        <a className="btn btn-primary" href={mailto}>
          Send Mail
        </a>
      </div>
    );
  }
}

export default Email;
