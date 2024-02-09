import React from "react";
import Templete from "../components/Templete";
import signupImg from "../assets/signupImg.jpg";
const SignUp = ({ setIsLoggedIn }) => {
  return (
    <Templete
      title="Join the millions learning to code with studentNotion for free"
      desc1="Build Skills for today, tomorrow, and beyond"
      desc2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default SignUp;
