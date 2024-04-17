import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, CircleX } from "lucide-react";
const ResponsiveMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = (value?: boolean) => {
    if (value != undefined) {
      setOpenMenu(value);
      return;
    }

    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Button
        className="justify-self-end ssm:col-start-2 ssm:row-start-1 ssm:order-3 sm:hidden"
        variant="ghost"
        size="icon"
        onClick={() => handleMenu()}
      >
        {openMenu ? <CircleX /> : <Menu />}
      </Button>

      <nav
        className={`fixed transition-all z-20 bg-zinc-100 dark:bg-zinc-800 h-full top-0 w-[220px] ${
          openMenu ? "left-0" : "left-[-100vw]"
        } flex items-center justify-center sm:relative sm:h-min sm:w-min sm:left-0 sm:bg-white  sm:dark:bg-zinc-950 sm:justify-self-center`}
      >
        <ul className="flex flex-col gap-10 sm:flex-row sm:w-full sm:gap-8 sm:justify-between">
          <li>
            <Link
              to="/"
              className={`${buttonVariants({
                variant: "ghost",
              })} text-xl   w-full sm:w-min  `}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className={`${buttonVariants({
                variant: "ghost",
              })} text-xl w-full sm:w-min   `}
            >
              Favorites
            </Link>
          </li>
          <li>
            <Link
              to="/aboutapi"
              className={`${buttonVariants({
                variant: "ghost",
              })}  text-xl  w-full sm:w-min  `}
            >
              API
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ResponsiveMenu;
