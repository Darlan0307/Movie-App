import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";
import { FormEvent, useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("invalid Email");
      return;
    }

    if (password.length < 6) {
      toast.error("short Password");
      return;
    }

    if (!(password == confirmPassword)) {
      toast.error("invalid Password");
      return;
    }

    console.log("passou");
  };

  return (
    <main className="w-full max-w-[400px] mx-auto flex flex-col gap-6 px-4">
      <h1 className="text-3xl text-center font-bold">SignUp</h1>

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex flex-col items-center gap-8"
      >
        <div className="w-full relative">
          <Input
            id="email"
            className="peer text-lg"
            required
            min={1}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label
            htmlFor="password"
            className="absolute top-[10%] left-[5%] transition-all text-lg  peer-focus-within:top-[-70%] peer-focus-within:left-1 peer-focus-within:text-primary peer-valid:top-[-70%] peer-valid:left-1 peer-valid:text-primary "
          >
            Password
          </Label>
        </div>
        <div className="w-full relative">
          <Input
            id="confirmpassword"
            className="peer text-lg"
            required
            min={1}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Label
            htmlFor="confirmpassword"
            className="absolute top-[10%] left-[5%] transition-all text-lg  peer-focus-within:top-[-70%] peer-focus-within:left-1 peer-focus-within:text-primary peer-valid:top-[-70%] peer-valid:left-1 peer-valid:text-primary "
          >
            Confirm Password
          </Label>
        </div>
        <Button type="submit" className="w-full text-white text-xl">
          register
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
        Already have an account?{" "}
        <Link to="/signin" className="text-primary underline">
          login
        </Link>
      </p>
    </main>
  );
};

export default SignUp;
