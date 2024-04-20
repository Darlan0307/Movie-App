import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  AuthError,
  signInWithRedirect,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const signInGooglePopup = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    const authErro = error as AuthError;
    const errorCode = authErro.code;
    const errorMessage = authErro.message;
    const email = authErro.customData.email;

    const credential = GoogleAuthProvider.credentialFromError(authErro);

    console.log(errorCode + errorMessage + email + credential);
  }
};

export const signInGoogleRedirect = async () => {
  try {
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.log(error);
  }
};
