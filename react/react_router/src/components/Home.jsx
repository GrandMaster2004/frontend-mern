import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/about");
  }
  return (
    <div>
      <h1>THis is Home page</h1>
      <h1>We want to go about page</h1>
      <button onClick={clickHandler}>Click to go</button>
    </div>
  );
};

export default Home;
