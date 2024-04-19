import { Link } from "react-router-dom";
import { buttonVariants } from "../../ui/button";
import { User, LogIn } from "lucide-react";
import { useAuthContext } from "@/context/UserProvider";

const ActionAuth = () => {
  const { userAuth, logout } = useAuthContext();

  return userAuth ? (
    <Link
      to="/"
      className={buttonVariants({ variant: "secondary" })}
      onClick={logout}
    >
      <LogIn />
      <span>Logout</span>
    </Link>
  ) : (
    <Link to="/signin" className={buttonVariants({ variant: "secondary" })}>
      <User />
      <span>SignIn</span>
    </Link>
  );
};

export default ActionAuth;
