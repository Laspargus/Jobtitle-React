import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import Clients from "./components/clients";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container row">
          <Clients />
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
