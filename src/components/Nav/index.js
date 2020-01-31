import * as React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const Nav = () => (
  <nav>
    <ul className="nav-list">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/units">Units</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
