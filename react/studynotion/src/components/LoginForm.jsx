import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function dataSummition(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged in successfully");
    navigate("/dashboard");
  }

  return (
    <form onSubmit={dataSummition}>
      <label>
        <p>
          Email Address<sup>*</sup>
        </p>
        <input
          type="email"
          required
          value={FormData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          name="email"
        />
      </label>
      <label>
        <p>
          Password<sup>*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          required
          value={FormData.password}
          onChange={changeHandler}
          placeholder="Enter password"
          name="password"
        />
        <span onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
        <Link to="#">
          <p>Forgot Password</p>
        </Link>
      </label>
      <button>Sign In</button>
    </form>
  );
};

export default LoginForm;
