"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
export default function NavbarItems({ title, params }: any) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        href={`/?genre=${params}`}
        className={`hover:text-amber-600 font-semibold ${
          genre === params
            ? "underline underline-offset-8 decoration-amber-500 rounded-lg"
            : ""
        }`}
      >
        {title}{" "}
      </Link>
    </div>
  );
}
