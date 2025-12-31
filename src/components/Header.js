import { useState } from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  const [isLogin, setIsLogin] = useState("Login");
  return (
    <header className="header">
      <div className="logo">Foodie App</div>
      <div className="nav-items">
        <ul className="nav-items">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <button
              className="btn-login"
              onClick={() => {
                isLogin === "Login"
                  ? setIsLogin("Logout")
                  : setIsLogin("Login");
              }}
            >
              {isLogin}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
