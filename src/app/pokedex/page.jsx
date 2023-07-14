import PokemonCard from '@/Components/PokedexPage/PokemonCard';

async function getData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Page = async (props) => {
  const pokemonData = await getData();
  console.log('pokemonData', pokemonData.results);


  return (
    <div>
      <h1 className="mb-4 text-xl font-medium">
        Pokedex
      </h1>

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
