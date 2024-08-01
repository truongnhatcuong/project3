"use client";
import React, { useEffect } from "react";

export default function error({ error, reset }: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Some thing went wrong. please try again later.</h1>
      <button onClick={() => reset()} className="hover:bg-amber-500">
        try Again
      </button>
    </div>
  );
}
