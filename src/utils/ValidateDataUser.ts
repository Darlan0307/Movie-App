import { toast } from "react-toastify";

const validateEmail = (email: string) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regex.test(email);
};

export default function ValidateDataUser(
  email: string,
  password: string,
  confirmPassword: string
) {
  let error = false;

  if (!validateEmail(email)) {
    toast.error("invalid Email");
    error = true;
  }

  if (password.length < 6) {
    toast.error("short Password");
    error = true;
  }

  if (!(password == confirmPassword)) {
    toast.error("invalid Password");
    error = true;
  }

  return error;
}
