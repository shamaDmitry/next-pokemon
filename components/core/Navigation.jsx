"use client";

import { useActivePath } from '@/hooks/useActivePath';
import classNames from 'classnames';
import Link from 'next/link';

const links = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "pokedex",
    href: "/pokedex",
  },
  {
    title: "about",
    href: "/about",
  },
]

const Navigation = () => {
  const checkActivePath = useActivePath()

  return (
    <nav className="flex justify-center w-full gap-4 mb-8 bg-white border rounded-lg shadow-lg">
      {links.map(link => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className={classNames(`py-4 capitalize`, {
              'text-red-400 border-b-4 border-red-400': checkActivePath(link.href),
            })}
          >
            {link.title}
          </Link>
        )
      })}
    </nav>
  );
}

export default Navigation;
