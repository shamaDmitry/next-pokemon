import { API_URL } from "@/lib/constants";
import PokemonCard from "./PokemonCard";

async function getData() {
  const res = await fetch(`${API_URL}/pokemon?offset=0&limit=12`);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const PokemonList = async () => {
  const pokemonData = await getData();

  return (
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
  );
}

export default PokemonList;
