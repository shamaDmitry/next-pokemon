"use client";

import { StopCircleIcon } from "@heroicons/react/24/solid";

function SearchInput() {
  return (
    <div className="relative flex mb-8">
      <input
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
    </div>
  )
}

export default SearchInput