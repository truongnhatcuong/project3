import ResultData from "@/app/components/ResultData";
import React from "react";
const API_KEY = "3c2c35cc207f0c2c8d3667e916ad29d8";
export default async function searchParmas({ params }: any) {
  const searchItem = params.searchItem;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchItem}&language=en-US&page=1&include_adult=false`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && <h1>not found data</h1>}

      {results && <ResultData result={results} />}
    </div>
  );
}
