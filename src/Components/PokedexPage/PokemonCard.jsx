import Tag from "../core/atoms/Tag";
import Image from "next/image";

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
    <section
      className="flex flex-col items-center justify-center p-8 bg-white border shadow-xl rounded-xl"
    >
      <figure>
        <Image
          width={100}
          height={100}
          priority={true}
          src={onePokemonData.sprites.front_default}
          alt=""
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
    </section>
  );
}

export default PokemonCard;
