import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import "./nav.css";
function Nav() {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <div className="nav-line"></div>
      <ul className="nav-list-items">
        <li>
          <NavLink to="/">00 Home</NavLink>
        </li>
        <li>
          <NavLink to="/destanation">01 Destination</NavLink>
        </li>
        <li>
          <NavLink to="/crew">02 Crew</NavLink>
        </li>
        <li>
          <NavLink to="/technology">03 Technology</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
