"use client";

function SearchInput() {
  return (
    <div className="flex mb-8">
      <input
        className="w-full border"
        type="text" placeholder="Search your Pokemon!"
      />

      <button>
        go
      </button>
    </div>
  )
}

export default SearchInput