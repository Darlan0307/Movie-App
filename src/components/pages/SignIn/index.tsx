import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const SignIn = () => {
  return (
    <main className="w-full max-w-[400px] mx-auto flex flex-col gap-6 px-4">
      <h1 className="text-3xl text-center font-bold">SignIn</h1>

      <form autoComplete="off" className="flex flex-col items-center gap-8">
        <div className="w-full relative">
          <Input id="email" className="peer text-lg" required min={1} />
          <Label
            htmlFor="email"
            className="absolute top-[10%] left-[5%] transition-all text-lg  peer-focus-within:top-[-70%] peer-focus-within:left-1 peer-focus-within:text-primary peer-valid:top-[-70%] peer-valid:left-1 peer-valid:text-primary "
          >
            Email
          </Label>
        </div>
        <div className="w-full relative">
          <Input
            id="password"
            className="peer text-lg"
            required
            min={1}
            type="password"
          />
          <Label
            htmlFor="password"
            className="absolute top-[10%] left-[5%] transition-all text-lg  peer-focus-within:top-[-70%] peer-focus-within:left-1 peer-focus-within:text-primary peer-valid:top-[-70%] peer-valid:left-1 peer-valid:text-primary "
          >
            Password
          </Label>
        </div>
        <Button type="submit" className="w-full text-white text-xl">
          login
        </Button>
      </form>

      <div className="relative my-3">
        <div className="h-[1px] w-full bg-black dark:bg-white"></div>
        <span className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-background font-bold text-xl p-1">
          OR
        </span>
      </div>

      <Button variant="secondary" className="flex items-center gap-2 py-5">
        {" "}
        <FaGoogle size={25} /> <span>Google</span>
      </Button>
      <Button variant="secondary" className="flex items-center gap-2 py-5">
        {" "}
        <FaGithub size={25} /> <span>GitHub</span>
      </Button>

      <p className="text-center text-lg">
        Don't have an account,{" "}
        <Link to="/signup" className="text-primary underline">
          create now!
        </Link>
      </p>
    </main>
  );
};

export default SignIn;
