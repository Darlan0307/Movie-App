import { useMovie } from "@/context/MovieProvider";
import { Link } from "react-router-dom";

const SectionProducts = () => {
  const { textSearchMovie, dataMovie, totalResults } = useMovie();

  return (
    <section className="flex flex-col gap-10 px-5">
      {textSearchMovie ? (
        <h1 className="text-3xl text-center">
          The search{" "}
          <span className="text-primary font-bold">{textSearchMovie}</span> had{" "}
          <span className="text-primary font-bold">{totalResults}</span> results
        </h1>
      ) : (
        <h1 className="text-3xl text-center">All Movies</h1>
      )}

      <div className="flex flex-wrap gap-10 justify-center items-start">
        {dataMovie?.results?.length > 0 ? (
          dataMovie.results.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className="w-[250px] relative cursor-pointer transition-all hover:translate-y-[-10px]"
            >
              <img
                className="w-full"
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.original_title}
              />
              <h3 className="text-xl text-center mt-2">{movie.title}</h3>
              <p className="absolute top-2 right-3 bg-background h-10 w-10 rounded-full flex items-center justify-center text-xl">
                {movie.vote_average.toFixed(1)}
              </p>
            </Link>
          ))
        ) : (
          <h2>Sem resultados</h2>
        )}
      </div>
    </section>
  );
};

export default SectionProducts;
