"use client"

import Tag from "../core/atoms/Tag";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import classNames from "classnames";
import { useParams } from "next/navigation";

const CardSkeleton = () => {
  return (
    <div
      role="status"
      className="p-4 bg-white border border-gray-200 shadow-xl rounded-xl md:p-6 dark:border-gray-700"
    >
      <div className="flex items-center justify-center w-32 h-24 mx-auto mb-4 bg-gray-300 rounded animate-pulse dark:bg-gray-700">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mx-auto" />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

const PokemonCard = ({ data }) => {
  const params = useParams();

  const { data: onePokemonData, isLoading, error } = useSWR(data.url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })

  if (isLoading) return <CardSkeleton />

  if (error) return "Error"

  return (
    <>
      <Link
        href={`/pokedex/${onePokemonData.id}`}
        className={classNames("flex flex-col items-center justify-center p-8 bg-white border border-slate-200 shadow-xl rounded-xl", {
          "border-slate-400 bg-slate-100": Number(params.slug) === onePokemonData.id
        })}
      >
        <figure
          className="flex flex-col items-center justify-end h-12 mb-4"
        >
          <Image
            width={1}
            height={1}
            className="w-auto"
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
    </>
  );
}

export default PokemonCard;
