import { Link } from "react-router-dom";

const NavbarBrand = () => {
  return (
    <h1 className="text-lg font-bold font-roboto">
      <Link to="/" className="py-3 pr-3">
        Creately
      </Link>
    </h1>
  );
};

export default NavbarBrand;
