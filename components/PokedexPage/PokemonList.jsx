"use client"

import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

import usePokemonStore from "@/store/pokemonStore";

const PokemonList = () => {
  const [limit, setLimit] = useState(9);

  const [pokemons, getAllPokemons, setPokemons] = usePokemonStore(state => [
    state.pokemons,
    state.getAllPokemons,
    state.setPokemons
  ])

  useEffect(() => {
    getAllPokemons(limit)
    return () => { };
  }, [getAllPokemons, limit]);

  return (
    <section className="grid grid-cols-3 gap-4">
      {pokemons.map(item => {
        return (
          <PokemonCard
            key={item.name}
            data={item}
          ></PokemonCard>
        )
      })}
    </section>
  );
}

export default PokemonList;
