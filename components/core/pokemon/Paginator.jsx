"use client";

import { API_URL } from "@/lib/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation'
import Image from "next/image";
import { ArrowSmallLeftIcon, ArrowSmallRightIcon } from "@heroicons/react/24/solid";

const Paginator = ({ prevItem, nextItem }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [index, setIndex] = useState(() => {
    const arr = pathname.split('/');

    return arr[arr.length - 1]
  });
  // const [offset, setOffset] = useState(0);
  // const [limit, setLimit] = useState(2);

  // const [prevLink, setPrevLink] = useState(null);
  // const [nextLink, setNextLink] = useState(null);

  // const [prevPokemon, setPrevPokemon] = useState(null);
  // const [nextPokemon, setNextPokemon] = useState(null);

  // const handleNext = () => setOffset(prevState => prevState + 1);
  // const handlePrev = () => setOffset(prevState => prevState - 1);

  // useEffect(() => {
  //   fetch(`${API_URL}/pokemon?offset=${offset}&limit=${limit}`)
  //     .then(res => res.json())
  //     .then(res => {
  //       // console.log(res);
  //       setPrevLink(res.previous);
  //       setNextLink(res.next);

  //       const prev = res.results[0];
  //       const next = res.results[1];

  //       setPrevPokemon(prev);
  //       setNextPokemon(next);

  //       // setCurrentPokemon(current);
  //       // setNextPokemon(next);
  //       // setNextLink(res.next);
  //     })

  //   return () => { };
  // }, [offset, limit]);
  console.log(prevItem);
  console.log(nextItem);

  return (
    <div className="flex justify-between gap-4 my-4">
      {prevItem &&
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={(e) => router.push(`/pokedex/${Number(index) - 1}`)}
        >
          <ArrowSmallLeftIcon className="w-4 h-4" />

          <div className="flex flex-col items-center">
            <Image
              width={1}
              height={1}
              className="mb-2 w-14"
              priority={true}
              src={prevItem.sprites.versions['generation-v']['black-white'].animated.front_default}
              alt=""
            />

            <p className="flex items-center gap-2">
              <span className="text-xs">
                #{prevItem.order}
              </span>
              {prevItem.name}
            </p>
          </div>
        </div>
      }

      {nextItem &&
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={(e) => router.push(`/pokedex/${Number(index) + 1}`)}
        >
          <div className="flex flex-col items-center">
            <Image
              width={1}
              height={1}
              className="mb-2 w-14"
              priority={true}
              src={nextItem.sprites.versions['generation-v']['black-white'].animated.front_default}
              alt=""
            />

            <p className="flex items-center gap-2">
              <span className="text-xs">
                #{nextItem.order}
              </span>
              {nextItem.name}
            </p>
          </div>
          <ArrowSmallRightIcon className="w-4 h-4" />
        </div>
      }
    </div>
  );
}

export default Paginator;
