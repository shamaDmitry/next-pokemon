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

const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav className="flex justify-center w-full gap-4 mb-8 border border-b rounded-lg shadow-lg">
      {links.map(link => {
        const isActive = pathname.startsWith(link.href)

        return (
          <Link
            key={link.href}
            href={link.href}
            className={classNames(`py-4 capitalize`, {
              'text-red-400 border-b-4 border-red-400': isActive,
            })}

          // className={classNames(`capitalize`, {
          //   "bg-blue-200": !isActive,
          //   "bg-red-200": isActive
          // })}
          >
            {link.title}
          </Link>
        )
      })}
    </nav>
  );
}

export default Navigation;
