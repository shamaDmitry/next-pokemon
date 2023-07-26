import Ability from '@/components/core/pokemon/Ability';
import CardTitle from '@/components/core/pokemon/CardTitle';
import Paginator from '@/components/core/pokemon/Paginator';
import Stats from '@/components/core/pokemon/Stats';
import { API_URL } from '@/lib/constants';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

async function getData(slug) {
  const res = await fetch(`${API_URL}/pokemon/${slug}`, { cache: 'no-store' });

  if (res.ok) return res.json()

  return null;
}

const Page = async ({ params, searchParams }) => {
  const data = await getData(params.slug)
  const prevData = await getData(Number(params.slug) - 1)
  const nextData = await getData(Number(params.slug) + 1)

  return (
    <div className="relative flex flex-col w-full max-w-sm p-4 text-center bg-white rounded-xl">
      <div className="absolute top-0 right-0">
        <Link
          href="/pokedex"
          className="inline-flex p-2"
        >
          <XMarkIcon
            className="w-6 h-6"
          />
        </Link>
      </div>

      <figure className="mx-auto mb-4 w-52">
        <Image
          width={1}
          height={1}
          className="w-auto mx-auto"
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
          {data.abilities.map((item, index) => {
            return (
              <Ability
                key={index}
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
          {data.stats.map((stat, index) => {
            return (
              <Stats
                key={index}
                value={stat.base_stat}
                type={stat.stat.name}
              />
            )
          })}
        </div>
      </div>

      <div>
        <Paginator
          prevItem={prevData}
          nextItem={nextData}
        />
      </div>
    </div>
  );
}

export default Page;
