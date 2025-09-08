import { NavLink } from "react-router";

function Nav() {
  return (
    <nav>
      <NavLink to="/">┃ Home ┃</NavLink>
      <NavLink to="/project">┃ Project ┃</NavLink>
      <NavLink to="/about">┃ About ┃</NavLink>
    </nav>
  );
}

export default Nav;