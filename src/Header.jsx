import React from "react";
import { Link, NavLink } from "react-router-dom";

const activeStyle = {
  color: "orange",
};

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img alt="Carved Rock Fitness" src="/images/Verser_Logo.jpg" />
            </Link>
            <strong>Online Store</strong>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/Mobile">
              Mobile
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
