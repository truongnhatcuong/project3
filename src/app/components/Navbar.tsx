import React from "react";
import NavbarItems from "./NavbarItems";

export default function Narbar() {
  return (
    <div
      className="text-xl flex justify-center gap-4 dark:bg-slate-600
     p-4 bg-amber-100 font-medium lg:text-lg "
    >
      <NavbarItems title="Trending" params={"fetchTrending"} />
      <NavbarItems title="Top Rated" params={"fetchTopRated"} />
    </div>
  );
}
