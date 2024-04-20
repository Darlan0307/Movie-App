import { useMovie } from "@/context/MovieProvider";
import MoveToTop from "@/utils/MoveToTop";
import { Link } from "react-router-dom";
import { TbMoodCry, TbArrowBackUp } from "react-icons/tb";
import { buttonVariants } from "@/components/ui/button";
const Favorites = () => {
  const { favorites } = useMovie();

  return (
    <main className="flex flex-col gap-8 max-w-[600px] mx-auto px-4">
      <MoveToTop />
      <Link
        to="/"
        className={`${buttonVariants({
          variant: "default",
        })} text-xl self-start text-white`}
      >
        <TbArrowBackUp size={30} />
        <span>Back</span>
      </Link>
      <h1 className="text-3xl text-primary font-bold text-center mb-4">
        Your Moveis Favorites
      </h1>
      <div className="w-full flex flex-col gap-12">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className={`${buttonVariants({
                variant: "secondary",
              })} flex justify-between h-[180px] w-full relative rounded-2xl gap-2`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="h-[100%] rounded-xl"
              />
              <h3 className=" font-bold text-lg overflow-auto z-10">
                {movie.title}
              </h3>

              <img
                src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                alt={movie.title}
                className="absolute top-0 left-0 opacity-20 brightness-50 w-full h-full rounded-2xl"
              />
            </Link>
          ))
        ) : (
          <h2 className="flex items-center gap-1">
            <span className="text-xl">Empty...</span> <TbMoodCry size={30} />
          </h2>
        )}
      </div>
    </main>
  );
};

export default Favorites;
