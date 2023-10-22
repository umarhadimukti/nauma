import Authenticated from "@/Layouts/Authenticated/Index";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
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
    <Authenticated>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
      </Head>
      <div>
        <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
        <Flickity className="gap-[30px]" options={flickityOptions}>
          {[1, 2, 3, 4].map((i) => {
            {/* Movie Thumbnail */ }
            return <FeaturedMovie key={i} name={`Avatar ${i}`} slug={`avatar-${i}`} category="Action" thumbnail="https://source.unsplash.com/1200x600?nature" rating={i + 1} />
          })}
        </Flickity>
      </div>
      <div className="mt-[50px]">
        <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
        <Flickity options={flickityOptions}>
          {[1, 2, 3, 4, 5, 6].map((i) => {
            {/* Movie */ }
            return <MovieCard key={i} name={`Avengers ${i}`} category="Action" slug={`avengers-${i}`} thumbnail="https://source.unsplash.com/600x900?films" />
          })}
        </Flickity>
      </div>
    </Authenticated >
  );
}