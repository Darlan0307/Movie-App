import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useMovie } from "@/context/MovieProvider";
import { Search } from "lucide-react";

const SectionFilters = () => {
  const {
    textSearchMovie,
    handleTextSearchMovie,
    typeSearch,
    handleTypeSearch,
  } = useMovie();

  return (
    <section className="flex flex-wrap justify-center items-center gap-10">
      <div className="w-full max-w-sm relative">
        <Input
          placeholder="Search a movie here..."
          className="text-lg"
          value={textSearchMovie}
          onChange={(e) => handleTextSearchMovie(e.target.value)}
        />
        <Search className="absolute top-[15%] right-2" />
      </div>

      <RadioGroup
        defaultValue={typeSearch}
        className="flex flex-wrap justify-center gap-5"
      >
        <div className="flex items-center space-x-2  group border py-1 px-2 rounded-xl">
          <RadioGroupItem
            value="popular"
            id="popular"
            className="peer "
            onClick={() => handleTypeSearch("popular")}
          />
          <Label
            htmlFor="popular"
            className="peer-checked:text-primary group-focus-within:text-primary cursor-pointer text-lg "
          >
            Popular
          </Label>
        </div>
        <div className="flex items-center space-x-2  group border py-1 px-2 rounded-xl">
          <RadioGroupItem
            value="now_playing"
            id="now_playing"
            className="peer"
            onClick={() => handleTypeSearch("now_playing")}
          />
          <Label
            htmlFor="now_playing"
            className="group-focus-within:text-primary cursor-pointer text-lg "
          >
            Now Playing
          </Label>
        </div>
        <div className="flex items-center space-x-2  group border py-1 px-2 rounded-xl">
          <RadioGroupItem
            value="top_rated"
            id="top_rated"
            className="peer"
            onClick={() => handleTypeSearch("top_rated")}
          />
          <Label
            htmlFor="top_rated"
            className="group-focus-within:text-primary cursor-pointer text-lg "
          >
            Top Rated
          </Label>
        </div>
        <div className="flex items-center space-x-2 group border py-1 px-2 rounded-xl">
          <RadioGroupItem
            value="upcoming"
            id="upcoming"
            className="peer"
            onClick={() => handleTypeSearch("upcoming")}
          />
          <Label
            htmlFor="upcoming"
            className="group-focus-within:text-primary cursor-pointer text-lg "
          >
            Upcoming
          </Label>
        </div>
      </RadioGroup>
    </section>
  );
};

export default SectionFilters;
