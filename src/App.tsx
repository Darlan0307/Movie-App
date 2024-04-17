import AppRoutes from "./components/AppRoutes";
import { MovieProvider } from "./context/MovieProvider";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MovieProvider>
        <AppRoutes />
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;
