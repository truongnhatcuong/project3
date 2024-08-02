import Link from "next/link";
import React, { useState } from "react";
import { BiLike } from "react-icons/bi";
interface Imovie {
  id: number;
  title: string;
  original_name: string;
  poster_path: string;
  overview: string;

  release_date: number;
  vote_count: number;
  name: string;
}

interface CardProps {
  item: Imovie;
}

export default function Card({ item }: CardProps) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

  return (
    <div className="bg-slate-700 border-gray-200 border-2 rounded-lg shadow-md overflow-hidden max-w-xs mx-auto hover:border-gray-400 hover:shadow-lg hover:bg-slate-800">
      <Link href={`/movie/${item.id}`}>
        <img
          src={imageUrl}
          alt={item.original_name}
          className="w-full h-36 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2 text-gray-100 ">
            {item?.title || item?.name}
          </h2>
          <p className="text-gray-200 text-base line-clamp-3">
            {item.overview}
          </p>
          <div>
            <p className="  text-gray-200 flex justify-start items-end mt-2">
              {item.release_date || "2024-06-19"}
            </p>
          </div>
          <div className="mt-2">
            <p className="text-gray-100 text-sm flex items-center  justify-end">
              <BiLike className="mr-1" /> {item.vote_count}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
