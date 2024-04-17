import { MovieType } from "@/@types/MovieType";
import { ReactNode, createContext, useContext, useState } from "react";

type ContextValue = {
  dataMovie: MovieType | null;
};

const MovieContext = createContext<ContextValue>({} as ContextValue);

type ProviderProps = {
  children: ReactNode;
};

export const MovieProvider = ({ children }: ProviderProps) => {
  const [dataMovie, setDataMovie] = useState<MovieType | null>(null);

  const value = {
    dataMovie,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export const useMovie = () => {
  return useContext(MovieContext);
};
