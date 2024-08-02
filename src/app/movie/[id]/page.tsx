import React from "react";
import Image from "next/image";
const API_KEY = "3c2c35cc207f0c2c8d3667e916ad29d8";

interface Imove {
  id: string;
  name: string;
  title: string;
  overview: string;
  release_date: number;
  poster_path: string;
  original_name: string;
  blackdrop_path: string;
  vote_average: number;
}

export default async function page({ params }: any) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  const movie: Imove = await res.json();

  const imageUrl = `https://image.tmdb.org/t/p/w500${
    movie.poster_path || movie.blackdrop_path
  }`;
  return (
    <div className="w-full">
      <div className="p-4 sm:p-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <div className="w-full sm:w-[500px] md:w-[800px] lg:w-[1000px] h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={movie.original_name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-5 text-black dark:text-gray-100">
          <h2 className="text-3xl font-bold mb-2 text-center">
            {movie.title || movie.name}
          </h2>
          <p className=" mb-4text-xl">{movie.overview}</p>
          <p className="">{movie.release_date}</p>
          <p className="">Lượt Đánh Giá : {movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
}
