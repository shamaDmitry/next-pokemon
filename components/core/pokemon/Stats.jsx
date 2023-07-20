"use client";

import classNames from "classnames";
import Tippy from '@tippyjs/react';

const colorMap = {
  "attack": "bg-[#FF994D]",
  "hp": "bg-[#DF2140]",
  "defense": "bg-[#FEDC4D]",
  "special-attack": "bg-[#85DDFF]",
  "special-defense": "bg-[#A8EF95]",
  "speed": "bg-[#FB94A8]",
}

const ToolTipContent = (type) => <span className="font-bold capitalize">{type}</span>

const Stats = ({ value, type }) => {
  return (
    // <Tippy content={ToolTipContent(type)}>
    <div className="flex flex-col items-center">
      <div
        title={type}
        className={classNames(`text-white cursor-help flex flex-col font-bold text-sm items-center justify-center w-10 h-10 p-2 border rounded-full ${colorMap[type]}`)}
      >
        {value}
      </div>

      <div className="mt-1 text-sm font-medium capitalize md:hidden">
        {type}
      </div>
    </div>
    // </Tippy>
  );
}

export default Stats;
