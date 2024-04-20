import { MovieInfo } from "@/@types/MovieType";
import { Button, buttonVariants } from "@/components/ui/button";
import { useMovie } from "@/context/MovieProvider";
import { useAuthContext } from "@/context/UserProvider";
import MoveToTop from "@/utils/MoveToTop";
import { useEffect, useState } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { FaTrashCan } from "react-icons/fa6";
import { MdBookmarkAdd } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
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
    const result = favorites.some((fav) => fav.id === movieFiltred?.id);
    setIsFavorite(result);
  }, [movieFiltred, favorites]);

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
      <Link
        to="/"
        className={`${buttonVariants({
          variant: "default",
        })} text-xl self-start text-white mb-5 ml-[10vw]`}
      >
        <TbArrowBackUp size={30} />
        <span>Back</span>
      </Link>
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
              className="text-white flex gap-1 items-center"
              onClick={() => {
                removeFavorites(movieFiltred?.id || 0);
              }}
            >
              <FaTrashCan size={20} />
              <span>Remove Favorites</span>
            </Button>
          ) : (
            <Button
              size="lg"
              className="text-white flex gap-1 items-center"
              onClick={() => {
                if (movieFiltred) {
                  handleClickAddFavorites(movieFiltred);
                }
              }}
            >
              <MdBookmarkAdd size={20} />
              <span>Add Favorites</span>
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
          className="opacity-50 dark:brightness-50 w-full h-full -z-10 absolute top-0 left-0"
        />
      </main>
    </>
  );
};

export default SingleProduct;
