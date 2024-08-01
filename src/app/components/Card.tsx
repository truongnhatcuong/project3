import React from "react";

interface Imovie {
  id: number;
  title: string;
  original_name: string;
  poster_path: string;
  overview: string;
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
      </div>
    </div>
  );
}
