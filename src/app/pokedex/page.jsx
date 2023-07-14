import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <>
      <h1 className="mb-4 text-xl font-medium">
        Pokedex
      </h1>

      <ul>
        <li>
          <Link href="/pokedex/1">
            Pokemon 1
          </Link>
        </li>
        <li>
          <Link href="/pokedex/2">
            Pokemon 2
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Page;
