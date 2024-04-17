import { MovieType } from "@/@types/MovieType";
import { api } from "@/services/api";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ContextValue = {
  dataMovie: MovieType | null;
  textSearchMovie: string;
  handleTextSearchMovie: (value: string) => void;
  typeSearch: string;
  handleTypeSearch: (value: string) => void;
  totalPage: number;
  currentPage: number;
  totalResults: number;
  prevPage: (num: number) => void;
  nextPage: (num: number) => void;
};

const MovieContext = createContext<ContextValue>({} as ContextValue);

type ProviderProps = {
  children: ReactNode;
};

export const MovieProvider = ({ children }: ProviderProps) => {
  const [dataMovie, setDataMovie] = useState<MovieType | null>(null);
  const [textSearchMovie, setTextSearchMovie] = useState("");
  const [typeSearch, setTypeSearch] = useState("popular");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);

  const handleTextSearchMovie = (value: string) => {
    setTextSearchMovie(value);
  };
  const handleTypeSearch = (value: string) => {
    setTypeSearch(value);
  };

  const prevPage = (num: number) => {
    if (num <= 0) return;
    setCurrentPage(num);
  };

  const nextPage = (num: number) => {
    if (num >= totalPage) return;
    setCurrentPage(num);
  };

  const fetchDataMovie = async (text?: string) => {
    if (text != undefined) {
      const response = await api.get(
        `search/movie?query=${text}&include_adult=true&language=pt-BR&page=${currentPage}`
      );
      setDataMovie(response.data.results);
      setTotalPage(response.data.total_pages);
      setTotalResults(response.data.total_results);
      // console.log(response.data);
      return;
    }

    const response = await api.get(
      `movie/${typeSearch}?language=pt-BR&include_adult=true&page=${currentPage}`
    );
    setDataMovie(response.data.results);
    setTotalPage(response.data.total_pages);
    setTotalResults(response.data.total_results);
    // console.log(response.data.results);
  };

  useEffect(() => {
    fetchDataMovie();
  }, []);

  const value = {
    dataMovie,
    textSearchMovie,
    handleTextSearchMovie,
    typeSearch,
    handleTypeSearch,
    totalPage,
    currentPage,
    totalResults,
    prevPage,
    nextPage,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export const useMovie = () => {
  return useContext(MovieContext);
};
