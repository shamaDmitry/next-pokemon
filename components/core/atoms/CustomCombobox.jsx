'use client';

import { Fragment, useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { API_URL } from '@/lib/constants';
import { debounce } from 'lodash';
import { TrashIcon } from '@heroicons/react/24/solid';

export default function CustomCombobox({ label, prependIcon, dataUrl, setFilter }) {
  const [menuItems, setMenuItems] = useState([]);
  const [selected, setSelected] = useState({ name: "", url: "" });
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/${dataUrl}?limit=999`)
      .then(res => res.json())
      .then(res => {
        setMenuItems(res.results);
      })
  }, [dataUrl])

  useEffect(() => {
    // setSelected(prevState => {
    //   return {
    //     ...prevState,
    //     ...menuItems[0]
    //   }
    // })
  }, [menuItems])

  const filteredPeople =
    query === ''
      ? menuItems
      : menuItems.filter((menuItem) =>
        menuItem.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )

  return (
    <Combobox
      value={selected}
      nullable
      onChange={(item) => {
        setSelected(item);

        setFilter(
          prevState => ({ ...prevState, ...item })
        );
      }}
    >
      <div className="relative">
        <div className="relative flex items-center w-full overflow-hidden text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <span className="w-5 h-5 mx-2 text-gray-400 shrink-0">
            {prependIcon}
          </span>

          <Combobox.Label className="capitalize">
            {label}:
          </Combobox.Label>

          <Combobox.Input
            className="w-full py-[10px] pl-3 pr-10 text-sm leading-5 text-gray-900 border-none focus:ring-0"
            displayValue={(value) => value?.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="flex items-center pr-6">
            <ChevronUpDownIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>

          {selected.name &&
            <button
              className="absolute right-0 flex p-2 -translate-y-1/2 top-1/2"
              onClick={() => {
                setFilter({})
                setSelected({})
              }}
            >
              <TrashIcon className="w-4 h-4 text-red-500" aria-hidden="true" />
            </button>}

        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute w-full z-[100] py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.length === 0 && query !== '' ? (
              <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                Nothing found.
              </div>
            ) : (
              filteredPeople.map((person) => (
                <Combobox.Option
                  key={person.url}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected, active }) => {
                    return (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                              }`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )
                  }}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
}
