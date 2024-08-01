import React, { useState } from "react";
import { BiLike } from "react-icons/bi";

interface Imovie {
  id: number;
  title: string;
  original_name: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  vote_count: number;
}

interface CardProps {
  item: Imovie;
}

export default function Card({ item }: CardProps) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
      <img
        src={imageUrl}
        alt={item.original_name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 dark:text-black">{item.title}</h2>
        <p className="text-gray-700 text-base line-clamp-3">{item.overview}</p>
        <div>
          <p className="  dark:text-gray-500 flex justify-start items-end mt-2">
            Rate :{item.vote_average}
          </p>
        </div>
        <div className="mt-2 ">
          <p className="text-gray-500 text-sm flex items-center  justify-end">
            <BiLike className="mr-1" /> {item.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
