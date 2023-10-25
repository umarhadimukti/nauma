import Authenticated from "@/Layouts/Authenticated/Index";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";

export default function Dashboard({ auth, movies, featured_movies }) {
  const flickityOptions = {
    "cellAlign": "left",
    "contain": true,
    "groupCells": 1,
    "wrapAround": false,
    "pageDots": false,
    "prevNextButtons": false,
    "draggable": ">1"
  };

  return (
    <Authenticated auth={auth}>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
      </Head>
      <div>
        <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
        <Flickity className="gap-[30px]" options={flickityOptions}>
          {featured_movies.map((movie) => {
            {/* Movie Thumbnail */ }
            return <FeaturedMovie key={movie.id} name={movie.name} slug={movie.slug} category={movie.category} thumbnail={movie.thumbnail} rating={movie.rating} />
          })}
        </Flickity>
      </div>
      <div className="mt-[50px]">
        <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
        <Flickity options={flickityOptions}>
          {movies.map((movie) => {
            {/* Movie */ }
            return <MovieCard key={movie.id} name={movie.name} category={movie.category} slug={movie.slug} thumbnail={movie.thumbnail} />
          })}
        </Flickity>
      </div>
    </Authenticated >
  );
}