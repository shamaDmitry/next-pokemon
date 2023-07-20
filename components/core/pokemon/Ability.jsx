"use client";

import useSWR from 'swr'
import classNames from 'classnames';
import Spinner from '../atoms/Spinner';
import Tippy from '@tippyjs/react';

const toolTipContent = (text) => <span className="font-bold">{text}</span>

const fetcher = (url) => fetch(url).then((r) => r.json())

const Ability = ({ name, url }) => {
  const { data, error } = useSWR(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  if (error) return 'Failed to load';
  if (!data) return <Spinner className="w-6 h-6" />;

  const [filteredEng] = data.effect_entries.filter(item => item.language.name === 'en');

  return (
    <div className={classNames(`cursor-help rounded-xl py-1 px-2 border capitalize text-sm font-medium`)}>
      <p title={filteredEng.short_effect}>
        {name}
      </p>
    </div>
  );
}

export default Ability;

// async function getData(url) {
//   const res = await fetch(`${url}`);

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   const json = await res.json();
//   const [filteredEng] = json.effect_entries.filter(item => item.language.name === 'en');

//   return filteredEng;
// }

// const Ability = async ({ name, url }) => {
//   const data = await getData(url)

//   return (
//     <div
//       title={data.short_effect}
//       className={`cursor-help rounded-xl py-1 px-2 border capitalize text-sm font-medium`}
//     >
//       <p>
//         {name}
//       </p>
//     </div>
//   );
// }

// export default Ability;
