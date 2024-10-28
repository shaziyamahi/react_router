// src/pages/Services.jsx
import { NavLink, Outlet } from "react-router-dom";
import ServicesOverview from "../components/ServicesOverview"; // Import the overview component

const Services = () => {
  return (
    <div>
      <h2>Our Services</h2>
      <nav className="services-nav">
        <ul>
          <li>
            <NavLink
              to="service1"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Service 1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="service2"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Service 2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="service3"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Service 3
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* This will render the matched child route */}
    </div>
  );
};

export default Services;
