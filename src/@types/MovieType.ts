export type MovieType = {
  dates?: Dates;
  page: number;
  results: MovieInfo[];
  total_pages: number;
  total_results: number;
};

interface Dates {
  maximum: string;
  minimum: string;
}

export type MovieInfo = {
  adult: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  isFavorite?: boolean;
};
