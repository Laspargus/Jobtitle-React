import React from "react";
import Email from "./email";
import Phone from "./phone";
import Avatar from "./avatar";
import Job from "./job";
import Color from "./color";
import Counter from "./counter";
import Parent from "./parent";
import Choice from "./choice";
import "./client.scss";

class Client extends React.Component {
  render() {
    let { firstName, lastName, phoneNumber, avatarImage, job } = this.props;
    return (
      <>
        <div className="text-center mb-3 mt-3 col-sm-6">
          <div className="card">
            <Avatar avatarImage={avatarImage} />
            <Job job={job} />
            <p className="card-text">
              {firstName}
              {lastName}
            </p>
            <div className="row mb-3">
              <Email firstName={firstName} lastName={lastName} />
              <Phone phoneNumber={phoneNumber} />
            </div>
            <Color />
            <Counter />
            <Parent />
            <Choice />
          </div>
        </div>
      </>
    );
  }
}

export default Client;
