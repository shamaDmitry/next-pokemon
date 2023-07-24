"use client";

import { API_URL } from "@/lib/constants";
import { StopCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function SearchInput() {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(search);
    fetch(`api/search?term=${search}`);
  }

  return (
    <form
      className="relative flex mb-8"
      onSubmit={handleSubmit}
    >
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-4 pr-12 border rounded-lg shadow-lg"
        type="text" placeholder="Search your Pokemon!"
      />

      <button
        className="absolute p-2 text-white -translate-y-1/2 bg-red-500 rounded-lg shadow-lg shadow-red-500 right-2 top-1/2"
      >
        <StopCircleIcon
          className="w-4 h-4"
        />
      </button>
    </form>
  )
}

export default SearchInput