"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center w-full gap-4 p-2 mb-4 border-b border-b-gray-950">
      <Link href="/">
        Home
      </Link>

      <Link href="/pokedex">
        Pokedex
      </Link>

      <Link href="/about">
        About
      </Link>
    </nav>
  );
}

export default Navigation;
