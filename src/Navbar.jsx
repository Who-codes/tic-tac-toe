import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <Link to={"/"}>
          <h1 className="logo">Tic-Tac-Toe</h1>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to={"/"}>
              <button className="btn nav-btn">Home</button>
            </Link>
          </li>
          <li>
            <Link to={"/help"}>
              <button className="btn nav-btn">Help</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
