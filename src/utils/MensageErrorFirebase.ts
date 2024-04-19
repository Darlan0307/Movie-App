import { FirebaseError } from "firebase/app";
import { toast } from "react-toastify";

export default function MensageErrorFirebase(error: unknown) {
  if (error) {
    const firebaseError = error as FirebaseError;
    if (firebaseError.message) {
      const inicial = firebaseError.message.indexOf("/");
      const final = firebaseError.message.lastIndexOf(")");
      const textError = firebaseError.message.slice(inicial + 1, final);

      toast.error(textError);
      return true;
    } else {
      toast.error("Unknown Error");
      return true;
    }
  }

  return false;
}
