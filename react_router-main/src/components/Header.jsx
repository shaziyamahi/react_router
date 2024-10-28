// src/components/Header.jsx
import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        {/* Replace with your logo path */}
        <h1 className="site-name">Air Ticket Booking</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/booking"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Services
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
