import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let SetIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-evenly text-2xl">
      {/* <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
    </Link> */}
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login SIngUp Logout Dashboard */}
      <div className="flex ml-5 mr-5 gap-3">
        {!isLoggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                SetIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
