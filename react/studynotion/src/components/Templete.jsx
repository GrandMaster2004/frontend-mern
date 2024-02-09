import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Templete = ({ title, desc1, formType, image, setIsLoggedIn, desc2 }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div>
          <div></div>
          <div>OR</div>
          <div></div>
        </div>
        <button>
          <p>Sign Up With Google</p>
        </button>
      </div>

      <div className="">
        <img src={image} alt="img" width={558} height={504} />
        <img src={image} alt="img" width={558} height={490} />
      </div>
    </div>
  );
};

export default Templete;
