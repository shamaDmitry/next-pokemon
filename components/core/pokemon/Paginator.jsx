"use client";

import { API_URL } from "@/lib/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { useRouter } from 'next/router'

const Paginator = () => {
  // const router = useRouter()

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(2);

  const [prevLink, setPrevLink] = useState(null);
  const [nextLink, setNextLink] = useState(null);

  const [prevPokemon, setPrevPokemon] = useState(null);
  const [nextPokemon, setNextPokemon] = useState(null);

  const handleNext = () => setOffset(prevState => prevState + 1);
  const handlePrev = () => setOffset(prevState => prevState - 1);

  useEffect(() => {
    fetch(`${API_URL}/pokemon?offset=${offset}&limit=${limit}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setPrevLink(res.previous);
        setNextLink(res.next);

        const prev = res.results[0];
        const next = res.results[1];

        setPrevPokemon(prev);
        setNextPokemon(next);

        // setCurrentPokemon(current);
        // setNextPokemon(next);
        // setNextLink(res.next);
      })

    return () => { };
  }, [offset, limit]);

  return (
    <>
      <div>{offset}</div>
      {/* <Link href={prevLink}>prev</Link> */}
      {/* <Link href={nextLink}>next</Link> */}
      {prevLink && <button className="px-2 py-1 border" onClick={() => handlePrev()}>prev</button>}
      {nextLink && <button className="px-2 py-1 border" onClick={() => handleNext()}>next</button>}



      <div>
        {prevLink && <div>
          {prevPokemon?.name}
        </div>}

        {nextLink && <div>
          {nextPokemon?.name}
        </div>}
      </div>

    </>


  );
}

export default Paginator;
