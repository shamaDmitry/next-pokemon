import Tag from "../core/atoms/Tag";
import Image from "next/image";
import Link from "next/link";

async function getData(url) {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const PokemonCard = async ({ data }) => {
  const onePokemonData = await getData(data.url)

  return (
    <Link
      href={`/pokedex/${onePokemonData.id}`}
      className="flex flex-col items-center justify-center p-8 bg-white border shadow-xl rounded-xl"
    >
      <figure
        className="flex flex-col items-center justify-end h-12 mb-4"
      >
        <Image
          width={1}
          height={1}
          className="w-auto"
          priority={true}
          src={onePokemonData.sprites.versions['generation-v']['black-white'].animated.front_default}
          alt={onePokemonData.name}
        />
      </figure>

      <h2 className="flex gap-0">
        №
        {onePokemonData.order}
      </h2>

      <h1 className="mb-3 font-semibold capitalize">
        {onePokemonData.name}
      </h1>

      <div className="flex flex-wrap gap-3">
        {onePokemonData.types.map(type => {
          return (
            <Tag
              key={type.slot}
              text={type.type.name}
              type={type.type.name}
            />
          )
        })}
      </div>
    </Link>
  );
}

export default PokemonCard;
