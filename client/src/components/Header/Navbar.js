import { NavbarStyle } from "./NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <NavbarStyle>
        <Link to="/">
          HOME
        </Link>
        <Link to="/products">
          Products
        </Link>
        <Link to="/inventory">
          Inventory
        </Link>
      
      </NavbarStyle>


    </div>
  );
};

export { Navbar };
