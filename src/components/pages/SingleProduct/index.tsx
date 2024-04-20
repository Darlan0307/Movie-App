import { useMovie } from "@/context/MovieProvider";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();

  const { dataMovie } = useMovie();

  const movieFiltred = dataMovie.results.find(
    (movie) => movie.id == Number(id)
  );

  return (
    <main>
      <h1>{movieFiltred?.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300${movieFiltred?.poster_path}`}
        alt={movieFiltred?.original_title}
      />
    </main>
  );
};

export default SingleProduct;
