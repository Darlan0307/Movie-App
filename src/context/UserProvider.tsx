import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { User, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { firebase_app } from "@/firebase/firebaseConfig";

interface AuthContextType {
  userAuth: User | null;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

interface AuthContextProviderProps {
  children: ReactNode;
}

const auth = getAuth(firebase_app);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [userAuth, setUserAuth] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (authUserCredentials: User | null) => {
        setUserAuth(authUserCredentials);
        console.log(userAuth);
      }
    );

    return () => unsubscribe();
  }, []);

  async function logout() {
    let result = null,
      error = null;
    try {
      result = await signOut(auth);
    } catch (e) {
      error = e;
    }

    return { result, error };
  }

  return (
    <AuthContext.Provider value={{ userAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
