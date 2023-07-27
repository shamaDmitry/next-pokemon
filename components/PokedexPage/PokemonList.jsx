"use client"

import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

import usePokemonStore from "@/store/pokemonStore";
import Filter from "../core/atoms/Filter";
import Input from "../core/atoms/Input";
import { debounce } from "lodash";

const PokemonList = () => {
  const [pokemons, getAllPokemons, limit, setLimit, searchTerm] = usePokemonStore(state => [
    state.pokemons,
    state.getAllPokemons,
    state.limit,
    state.setLimit,
    state.searchTerm,
  ])

  useEffect(() => {
    getAllPokemons()
    return () => { };
  }, [getAllPokemons, limit]);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="w-full md:max-w-xs">
          <Filter />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-bold capitalize">
            quantity
          </span>

          <Input
            className="w-full max-w-[100px]"
            value={limit}
            onChange={e => setLimit(e.target.value)}
          />
        </div>
      </div>

      <section className="grid grid-cols-3 gap-4">
        {pokemons
          .filter(pokemon =>
            pokemon.name
              .toLowerCase()
              .includes(
                searchTerm.toLowerCase()
              ))
          .map(item => {
            return (
              <PokemonCard
                key={item.name}
                data={item}
              ></PokemonCard>
            )
          })}
      </section>
    </>
  );
}

export default PokemonList;
