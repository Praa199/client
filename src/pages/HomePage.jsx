import React from "react";

import "../App.css";
import HomeForm from "../components/HomePage/HomeForm";
import Landing from "../components/HomePage/Landing";
import "../absolutvision-uCMKx2H1Y38-unsplash.jpg";
import NewMonthButton from "../components/HomePage/NewMonthButton";

function HomePage(props) {
  const { user } = props;

  return (
    <div className="App">
      <header className="App-header">
        {user ? <HomeForm user={user} /> : <Landing />}
      </header>
    </div>
  );
}

export default HomePage;
