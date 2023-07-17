'use client';

import { useState } from "react";

const PokedexLayout = ({ pokemonList, pokemon }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div className="flex gap-8">
      <div className="w-full">
        <button
          onClick={() => setSelectedPokemon(prevState => !prevState)}
        >
          select
        </button>

        {pokemonList}
      </div>

      {
        selectedPokemon && <div className="w-full max-w-md">
          {pokemon}
        </div>
      }
    </div>
  )
}

export default PokedexLayout;