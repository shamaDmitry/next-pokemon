import Ability from '@/components/core/pokemon/Ability';
import CardTitle from '@/components/core/pokemon/CardTitle';
import Stats from '@/components/core/pokemon/Stats';
import { API_URL } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

async function getPokemonData(slug) {
  const res = await fetch(`${API_URL}/pokemon/${slug}`)
  // const resAbility = await fetch(`${API_URL}/ability/${slug}`)
  const data = res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data;
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
          {/* {data.abilities.map((item, index) => {
            return (
              <Ability
                key={index}
                name={item.ability.name}
                url={item.ability.url}
              />
            )
          })} */}
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
          stats

          {/* {data?.stats?.map((stat, index) => {
            return (
              <Stats
                key={index}
                value={stat.base_stat}
                type={stat.stat.name}
              />
            )
          })} */}
        </div>
      </div>

      {/* <div>
        <Paginator></Paginator>
      </div> */}
    </div>
  );
}

export default Page;
