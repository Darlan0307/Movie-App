import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  AuthError,
  signInWithRedirect,
} from "firebase/auth";

const provider = new GithubAuthProvider();

const auth = getAuth();

export const signInGithubPopup = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    const authErro = error as AuthError;
    const errorCode = authErro.code;
    const errorMessage = authErro.message;
    const email = authErro.customData.email;

    const credential = GithubAuthProvider.credentialFromError(authErro);

    console.log(errorCode + errorMessage + email + credential);
  }
};

export const signInGithubRedirect = async () => {
  try {
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.log(error);
  }
};
