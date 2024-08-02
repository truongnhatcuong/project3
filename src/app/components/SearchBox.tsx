"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/search/${search}`);
    setSearch("");
  };
  return (
    <form
      className="flex justify-between max-w-6xl mt-10 ml-20"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search for movies..."
        className="w-full rounded-md placeholder-gray-400 outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="text-amber-400 disabled:text-gray-400"
        disabled={search == ""}
      >
        Search
      </button>
    </form>
  );
}
