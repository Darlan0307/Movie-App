import { MovieInfo } from "@/@types/MovieType";
import { Button } from "@/components/ui/button";
import { useMovie } from "@/context/MovieProvider";
import { useAuthContext } from "@/context/UserProvider";
import MoveToTop from "@/utils/MoveToTop";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SingleProduct = () => {
  const { id } = useParams();

  const { dataMovie, addFavorites, removeFavorites, favorites } = useMovie();

  const { userAuth } = useAuthContext();

  const [isFavorite, setIsFavorite] = useState(false);

  const movieFiltred = dataMovie.results?.find(
    (movie) => movie.id == Number(id)
  );

  useEffect(() => {
    if (movieFiltred) {
      const result = favorites.includes(movieFiltred);
      setIsFavorite(result);
    }
  });

  const handleClickAddFavorites = (data: MovieInfo) => {
    if (userAuth) {
      addFavorites(data);
      toast.success("sucess!");
    } else {
      toast.warn("Make login!");
    }
  };

  return (
    <>
      <MoveToTop />
      <main className="relative p-5 flex flex-wrap justify-center items-center gap-6 sm:gap-16">
        <img
          src={`https://image.tmdb.org/t/p/w300${movieFiltred?.poster_path}`}
          alt={movieFiltred?.original_title}
          className="rounded-xl sm:w-[400px]"
        />
        <article className="flex flex-col items-start gap-4 max-w-[400px]">
          {isFavorite ? (
            <Button
              variant="destructive"
              size="lg"
              className="text-white"
              onClick={() => {
                removeFavorites(movieFiltred?.id || 0);
              }}
            >
              Remove Favorites
            </Button>
          ) : (
            <Button
              size="lg"
              className="text-white"
              onClick={() => {
                if (movieFiltred) {
                  handleClickAddFavorites(movieFiltred);
                }
              }}
            >
              Add Favorites
            </Button>
          )}
          <h1 className="text-2xl font-bold">{movieFiltred?.title}</h1>
          <div className="flex flex-col gap-4 ">
            <p className="text-lg">
              <span className="text-xl pr-2 font-bold">Popularity:</span>
              {movieFiltred?.popularity}
            </p>
            <p className="text-lg">
              <span className="text-xl pr-2 font-bold">Vote Average:</span>
              {movieFiltred?.vote_average.toFixed(2)}
            </p>
            <p className="text-lg">
              <span className="text-xl pr-2 font-bold">Vote Count:</span>
              {movieFiltred?.vote_count}
            </p>
          </div>
          <p className="text-lg overflow-y-auto">
            <span className="text-xl pr-2 font-bold">Overview:</span>
            {movieFiltred?.overview}
          </p>
        </article>

        <img
          src={`https://image.tmdb.org/t/p/w300${movieFiltred?.backdrop_path}`}
          alt={movieFiltred?.original_title}
          className="opacity-20 w-full h-full -z-10 absolute top-0 left-0"
        />
      </main>
    </>
  );
};

export default SingleProduct;
