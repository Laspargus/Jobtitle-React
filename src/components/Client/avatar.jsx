import React from "react";

class Avatar extends React.Component {
  render() {
    let { avatarImage } = this.props;
    return <img className="flexible" src={avatarImage} />;
  }
}

export default Avatar;
