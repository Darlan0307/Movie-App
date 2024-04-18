import { Link } from "react-router-dom";
import { buttonVariants } from "../../ui/button";
import { User, LogIn } from "lucide-react";

const ActionAuth = () => {
  return (
    <Link to="/signin" className={buttonVariants({ variant: "secondary" })}>
      <User />
      <span>SignIn</span>
    </Link>
  );
};

export default ActionAuth;
