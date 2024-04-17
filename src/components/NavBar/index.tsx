import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import ActionAuth from "./ActionAuth";
import ResponsiveMenu from "./ResponsiveMenu";

const NavBar = () => {
  return (
    <header className="p-6 grid grid-cols-2 grid-rows-2 gap-1 items-center ssm:grid-rows-1 ssm:gap-10 sm:grid-cols-3">
      <Link to="/" className="flex flex-col gap-1 items-center">
        <img className="w-[60px] " src={logo} alt="logo do site" />
        <span className="font-bold">Search Movies</span>
      </Link>

      <ResponsiveMenu />

      <div className="col-span-full justify-self-center flex items-center gap-5 ssm:col-span-1 ssm:col-start-2 ssm:row-start-1 ssm:pr-10 sm:col-start-3 sm:justify-self-end">
        <ActionAuth />

        <ModeToggle />
      </div>
    </header>
  );
};

export default NavBar;
