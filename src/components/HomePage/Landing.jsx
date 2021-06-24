import React from "react";
import logo from "../../logo.png";

function Landing() {
  return (
    <div className="landing_container">
      <div className="book__section">
        <h1>Mi Budget</h1>
        <p>
          This is a Single Page App that recieves and calculates personal
          budgets. It is the final project (3/3)
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="white__paper"></div>
    </div>
  );
}

export default Landing;
