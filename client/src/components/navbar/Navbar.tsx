import { Link } from "react-router-dom";
import NavbarBrand from "../brand/navbarBrand/NavbarBrand";
import NavbarNotSignedIn from "./navbarNotSignedIn/NavbarNotSignedIn";

const Navbar = () => {
  return (
    <nav className="bg-white px-5 py-3 border-b border-gray-300">
      <div className="container flex items-center justify-between gap-3 mx-auto">
        <ul className="flex items-center gap-3">
          <li>
            <NavbarBrand />
          </li>
        </ul>
        <NavbarNotSignedIn />
      </div>
    </nav>
  );
};

export default Navbar;
