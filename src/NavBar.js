import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">
        Home
      </Link>
      <Link to="/companies">
        Companies
      </Link>
      <Link to="/jobs">
        Jobs
      </Link>
    </nav>
  );
}

export default NavBar;