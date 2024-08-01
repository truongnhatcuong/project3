"use client";
import React, { useEffect, useState } from "react";
import ResultData from "./components/ResultData";

const API_KEY = "3c2c35cc207f0c2c8d3667e916ad29d8";

export default function Page({ searchParams }: any) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const genre = searchParams.genre || "fetchTrending";
  const url = `https://api.themoviedb.org/3${
    genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
  }?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      try {
        // Delay the fetch with setTimeout
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await req.json();
        setData(result);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading)
    return (
      <div>
        {" "}
        <div className="flex justify-center mt-60">
          <span className="loading loading-spinner loading-xs"></span>
          <span className="loading loading-spinner loading-sm"></span>
          <span className="loading loading-spinner loading-md"></span>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Render your ResultData component or other components here */}
      {/* Assuming `result` should be `data.results` */}
      <ResultData result={data.results} />
    </div>
  );
}
