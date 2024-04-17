import { Button } from "../../ui/button";
import { User, LogIn } from "lucide-react";

const ActionAuth = () => {
  return (
    <Button variant="secondary">
      <User />
      <span>SignIn</span>
    </Button>
  );
};

export default ActionAuth;
