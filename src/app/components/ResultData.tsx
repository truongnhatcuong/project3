import React, { useEffect, useState } from "react";
import Card from "./Card";

interface Imovie {
  id: number;
  title: string;
  original_name: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  vote_count: number;
}

interface Imovies {
  result: Imovie[];
}

export default function ResultData({ result }: Imovies) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 gap-4">
      {result.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
