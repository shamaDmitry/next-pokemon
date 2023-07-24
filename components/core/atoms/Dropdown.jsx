"use client"

import useSWR from 'swr'
import { Combobox, Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { Fragment, useEffect, useState } from "react";
import { fetcher } from '@/lib/fetcher';
import { useDropdownList } from '@/hooks/useDropdownList';

const Dropdown = ({ prependIcon, placeholder, dataUrl }) => {
  const limit = 999;
  const { data: options, error, isLoading } = useDropdownList(`${dataUrl}?limit=${limit}`);
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  // const copyData = [...options]
  console.log(options);

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(options)

  // useEffect(() => {
  //   setSelected(data?.results)
  //   return () => { };
  // }, [data]);



  // const [selected, setSelected] = useState({});

  // console.log('dataUrl', dataUrl);

  // const { data, error, isLoading } = useDropdownList(`${dataUrl}?limit=${limit}`);
  // console.log(data);

  // const [query, setQuery] = useState("");



  // const filteredData =
  //   query === ''
  //     ? selected
  //     : selected?.filter((item) =>
  //       item.name
  //         .toLowerCase()
  //         .replace(/\s+/g, '')
  //         .includes(query.toLowerCase().replace(/\s+/g, ''))
  //     );

  // console.log('filteredData', filteredData);


  return (
    <>
      test
      {/* <pre>
        {JSON.stringify(filteredData, null, 2)}
      </pre> */}

      {/* <Combobox
        value={selected && selected[0] || {}}
        onChange={setSelected}
      >
        <div className="relative">
          <div className="relative flex items-center w-full overflow-hidden text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <span className="w-5 h-5 ml-2 text-gray-400">
              {prependIcon}
            </span>

            <Combobox.Input
              className="w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 border-none focus:ring-0"
              displayValue={(item) => {
                return item ? item.name : <span>Placeholder</span>
              }}
              onChange={(event) => setQuery(event.target.value)}
            />

            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options
              className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              {filteredData?.length === 0 && query !== '' ? (
                <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                  Nothing found.
                </div>
              ) : (
                filteredData.map((item) => {
                  console.log('item', item);

                  return (
                    <Combobox.Option
                      key={item.name}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-4 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                        }`
                      }
                      value={item.name}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                              }`}
                          >
                            {item.name}
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
                      )}
                    </Combobox.Option>
                  )
                })
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox> */}
    </>
  );
}

export default Dropdown;
