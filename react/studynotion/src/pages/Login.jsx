import React from "react";
import Templete from "../components/Templete";
import loginImg from "../assets/loginImg.jpg";
const Login = ({ setIsLoggedIn }) => {
  return (
    <Templete
      title="Welcome Back"
      desc1="Build Skills for today, tomorrow, and beyond"
      desc2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Login;
