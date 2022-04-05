import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav-container">
      <Link to="/home">Home</Link>
      <Link to="/review">Reviews</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Header;
