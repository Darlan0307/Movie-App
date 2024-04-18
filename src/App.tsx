import AppRoutes from "./components/AppRoutes";
import { MovieProvider } from "./context/MovieProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MovieProvider>
        <>
          <ToastContainer autoClose={3000} position={"bottom-left"} />
          <AppRoutes />
        </>
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;
