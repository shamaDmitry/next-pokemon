"use client";

import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';

const ToolTipContent = (text) => <span className="font-bold">{text}</span>

const Ability = ({ name, url }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const filteredEng = res.effect_entries.filter(item => item.language.name === 'en');

        setState(...filteredEng)
      })
    return () => { };
  }, []);

  return (
    <Tippy content={ToolTipContent(state?.short_effect)}>
      <div className={classNames(`cursor-help rounded-xl py-1 px-2 border capitalize text-sm font-medium`)}>
        <p title={state?.short_effect}>
          {name}
        </p>
      </div>
    </Tippy>
  );
}

export default Ability;
