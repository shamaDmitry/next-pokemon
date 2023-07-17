export default function PokedexLayout({ children, pokemonList, pokemon }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {pokemonList}
      {pokemon}
    </div>
  )
}