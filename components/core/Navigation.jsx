"use client";

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

export function useActivePath(path) {
  const pathname = usePathname()

  const checkActivePath = (path) => {
    if (path === '/' && pathname !== path) {
      return false
    }
    return pathname.startsWith(path)
  }

  return checkActivePath
}

const Navigation = () => {
  const pathname = usePathname()
  const checkActivePath = useActivePath()

  return (
    <nav className="flex justify-center w-full gap-4 mb-8 bg-white border border-b rounded-lg shadow-lg">
      {links.map(link => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className={classNames(`py-4 capitalize`, {
              // 'text-red-400 border-b-4 border-red-400': pathname === link.href,
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
