import React from "react";
import { MdLocalGroceryStore } from "react-icons/md";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img
              src="https://imgs.search.brave.com/fbEnL8NXWewgzkTATS_c-nT0WGin9uklwVnPIXyTgtQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDMvR29GdW5kTWUt/TG9nby03MDB4Mzk0/LnBuZw"
              alt="img logo"
            />
          </div>
        </NavLink>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <MdLocalGroceryStore />
              {cart.length > 0 && <span>{cart.length}</span>}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
