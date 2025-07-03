import { NavLink } from "react-router-dom";
import "../component/Nav.css";
function Nav() {
  return (
    <div id="header">
      <div>
        {" "}
        <h1>MYTASKMANGAER</h1>
      </div>
      <div>
        <NavLink to="/Home">HOME</NavLink>
        <NavLink to="/About">ABOUT</NavLink>
      </div>
    </div>
  );
}

export default Nav;
