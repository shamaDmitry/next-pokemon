import Ability from '@/components/core/pokemon/Ability';
import CardTitle from '@/components/core/pokemon/CardTitle';
import Paginator from '@/components/core/pokemon/Paginator';
import Stats from '@/components/core/pokemon/Stats';
import { API_URL } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

async function getPokemonData(params) {
  const res = await fetch(`${API_URL}/pokemon/${params}`)
  const resAbility = await fetch(`${API_URL}/ability/${params}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Page = async ({ params, searchParams }) => {
  const data = await getPokemonData(params.slug)

  return (
    <div className="flex flex-col p-4 text-center bg-white rounded-xl">
      <div>
        <Link
          href="/pokedex"
          className="inline-flex p-2 border"
        >
          go back
        </Link>
      </div>

      <figure className="mx-auto mb-4 w-52">
        <Image
          width={1}
          height={1}
          className="w-auto"
          priority={true}
          src={data.sprites.other.dream_world.front_default}
          alt={data.name}
        />
      </figure>

      <div className="mb-2 text-sm font-bold text-gray-500">
        {`#${data.order}`}
      </div>

      <div className="mb-2 text-2xl font-bold capitalize">
        {data.name}
      </div>

      <div className="mb-4">
        <CardTitle
          text="abilities"
        />

        <div className="grid grid-cols-2 gap-4">
          {data.abilities.map(item => {
            return (
              <Ability
                key={item.id}
                name={item.ability.name}
                url={item.ability.url}
              />
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <CardTitle
            text="Height"
          />
          <div className="p-1 border">
            {data.height / 10} m
          </div>
        </div>

        <div>
          <CardTitle
            text="weight"
          />
          <div className="p-1 border">
            {data.weight / 10} kg
          </div>
        </div>

        <div>
          <CardTitle
            text="base exp"
          />

          <div className="p-1 border">
            {data.base_experience}
          </div>
        </div>
      </div>

      <div>
        <CardTitle
          text="stats"
        />

        <div className="flex justify-center gap-x-2">
          {data.stats.map(stat => {
            return (
              <Stats
                key={stat.stat.name}
                value={stat.base_stat}
                type={stat.stat.name}
              />
            )
          })}
        </div>
      </div>

      <div>
        <Paginator></Paginator>
      </div>
    </div>
  );
}

export default Page;
