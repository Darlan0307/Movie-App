import { MovieInfo, MovieType } from "@/@types/MovieType";
import { api } from "@/services/api";
import { useDebounce } from "@uidotdev/usehooks";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ContextValue = {
  dataMovie: MovieType;
  textSearchMovie: string;
  handleTextSearchMovie: (value: string) => void;
  typeSearch: string;
  handleTypeSearch: (value: string) => void;
  totalPage: number;
  currentPage: number;
  totalResults: number;
  handleCurrentPage: (num: number) => void;
  addFavorites: (data: MovieInfo) => void;
  removeFavorites: (id: number) => void;
  favorites: MovieInfo[];
};

const MovieContext = createContext<ContextValue>({} as ContextValue);

type ProviderProps = {
  children: ReactNode;
};

export const MovieProvider = ({ children }: ProviderProps) => {
  const [dataMovie, setDataMovie] = useState<MovieType>({} as MovieType);
  const [textSearchMovie, setTextSearchMovie] = useState("");
  const [typeSearch, setTypeSearch] = useState("popular");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);
  const [favorites, setFavorites] = useState<MovieInfo[]>(
    JSON.parse(localStorage.getItem("MoviesFavorites") as string) || []
  );

  const delayTextSearchMovie = useDebounce(textSearchMovie, 400);

  const addFavorites = (data: MovieInfo) => {
    data["isFavorite"] = true;
    setFavorites([...favorites, data]);
  };

  const removeFavorites = (id: number) => {
    const favoritesFiltred = favorites.filter((movie) => movie.id != id);

    setFavorites(favoritesFiltred);
  };

  const handleTextSearchMovie = (value: string) => {
    setTextSearchMovie(value);
  };
  const handleTypeSearch = (value: string) => {
    setTypeSearch(value);
  };

  const handleCurrentPage = (num: number) => {
    if (num <= 0) return;
    if (num > totalPage) return;
    setCurrentPage(num);
  };

  const fetchDataMovie = async (text?: string) => {
    if (text != undefined) {
      const response = await api.get(
        `search/movie?query=${text}&include_adult=true&language=pt-BR&page=${currentPage}`
      );
      setDataMovie(response.data);
      setTotalPage(response.data.total_pages);
      setTotalResults(response.data.total_results);
      // console.log(response.data);
      return;
    }

    const response = await api.get(
      `movie/${typeSearch}?language=pt-BR&include_adult=true&page=${currentPage}`
    );
    setDataMovie(response.data);
    setTotalPage(response.data.total_pages);
    setTotalResults(response.data.total_results);
    // console.log(response.data);
  };

  useEffect(() => {
    fetchDataMovie();
  }, []);

  useEffect(() => {
    if (delayTextSearchMovie) {
      fetchDataMovie(delayTextSearchMovie);
      return;
    }

    fetchDataMovie();
  }, [typeSearch, delayTextSearchMovie, currentPage]);

  useEffect(() => {
    setTextSearchMovie("");
  }, [typeSearch]);

  useEffect(() => {
    localStorage.setItem("MoviesFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const value = {
    dataMovie,
    textSearchMovie,
    handleTextSearchMovie,
    typeSearch,
    handleTypeSearch,
    totalPage,
    currentPage,
    totalResults,
    handleCurrentPage,
    addFavorites,
    removeFavorites,
    favorites,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export const useMovie = () => {
  return useContext(MovieContext);
};
