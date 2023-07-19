// "use client";

// import useSWR from 'swr'
// import classNames from 'classnames';
// import Tippy from '@tippyjs/react';
// import Spinner from '../atoms/Spinner';

// const ToolTipContent = (text) => <span className="font-bold">{text}</span>

// const fetcher = (url) => fetch(url).then((r) => r.json())

// const Ability = ({ name, url }) => {
//   const { data, error } = useSWR(url, fetcher);

//   if (error) return 'Failed to load';
//   if (!data) return <Spinner className="w-6 h-6" />;

//   const [filteredEng] = data.effect_entries.filter(item => item.language.name === 'en');

//   return (
//     <Tippy content={ToolTipContent(filteredEng.short_effect)}>
//       <div className={classNames(`cursor-help rounded-xl py-1 px-2 border capitalize text-sm font-medium`)}>
//         <p title={filteredEng.short_effect}>
//           {name}
//         </p>
//       </div>
//     </Tippy>
//   );
// }

// export default Ability;

async function getData(url) {
  const res = await fetch(`${url}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const json = await res.json();
  const [filteredEng] = json.effect_entries.filter(item => item.language.name === 'en');

  return filteredEng;
}
const Ability = async ({ name, url }) => {
  const data = await getData(url)

  console.log('ability', data);

  return (
    <div
      className={`cursor-help rounded-xl py-1 px-2 border capitalize text-sm font-medium`}
      title={data.short_effect}
    >
      <p>
        {name}
      </p>
    </div>
  );
}

export default Ability;
