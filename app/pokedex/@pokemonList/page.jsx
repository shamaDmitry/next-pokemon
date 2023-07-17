import Button from '@/components/core/atoms/Button';
import Dropdown from '@/components/core/atoms/Dropdown';
import Filter from '@/components/core/atoms/Filter';
import Input from '@/components/core/atoms/Input';
import SearchInput from '@/components/core/atoms/SearchInput';
import PokemonCard from '@/components/PokedexPage/PokemonCard';
import React from 'react';

async function getData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Page = async () => {
  const pokemonData = await getData();

  return (
    <div>
      <SearchInput></SearchInput>

      <div className="flex justify-between mb-6">
        <Filter></Filter>

        <div className="flex gap-2">
          <span>from</span>
          <Input></Input>
          <span>to</span>
          <Input></Input>
        </div>
      </div>

      <div className="flex gap-2 mb-10">
        <Dropdown></Dropdown>
        <Dropdown></Dropdown>
        <Dropdown></Dropdown>
        <Dropdown></Dropdown>
        <Dropdown></Dropdown>

        <Button></Button>
      </div>

      <section className="grid grid-cols-3 gap-4">
        {pokemonData.results.map(item => {
          return (
            <PokemonCard
              key={item.name}
              data={item}
            ></PokemonCard>
          )
        })}
      </section>
    </div>
  );
}

export default Page;
