import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  function backHandler() {
    navigate(-1);
  }
  return (
    <div>
      <h1>This is About pages</h1>
      <button onClick={backHandler}>Go Back</button>
    </div>
  );
};

export default About;
