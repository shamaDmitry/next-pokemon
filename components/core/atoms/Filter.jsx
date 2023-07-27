"use client";

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import usePokemonStore from '@/store/pokemonStore';

const menuItem = [
  { name: 'Ascending' },
  { name: 'Descending' },
]

const Filter = () => {
  const [setPokemons, limit] = usePokemonStore(state => [
    state.setPokemons,
    state.limit,
  ])

  const [selected, setSelected] = useState(menuItem[0])

  const handleSort = async (direction) => {
    const res = await fetch(`/api/sort?direction=${direction.name.toLowerCase()}&limit=${limit}`)
    const resData = await res.json();

    setPokemons(resData.data);
  }

  return (
    <Listbox
      className="w-full"
      value={selected}
      onChange={(item) => {
        setSelected(item);
        handleSort(item);
      }}
    >
      <div className="relative">
        <Listbox.Button
          className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        >
          <span className="block truncate">
            {selected.name}
          </span>

          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronUpDownIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className="absolute z-[100] w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {menuItem.map((menuItem, menuItemIdx) => (
              <Listbox.Option
                key={menuItemIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
                value={menuItem}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                        }`}
                    >
                      {menuItem.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

export default Filter;
