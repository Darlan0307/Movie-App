import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className="w-[100px] " src={logo} alt="logo do site" />
        <span>Search Movies</span>
      </Link>

      <nav>
        <ul>
          <li>produtos</li>
          <li>favoritos</li>
          <li>sobre a api</li>
        </ul>
      </nav>

      <button>signin</button>
      <button>toggle theme</button>
    </header>
  );
};

export default NavBar;
