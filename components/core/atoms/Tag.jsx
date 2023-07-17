"use client";

import classNames from 'classnames';
import React from 'react';

const Tag = ({text, type = "unknown"}) => {
  return (
    <div className={classNames("px-2 py-1 uppercase whitespace-nowrap font-semibold rounded text-center", {
      "bg-normal text-zinc-950": type === "normal",
      "bg-fighting text-white": type === "fighting",
      "bg-flying text-zinc-950": type === "flying",
      "bg-poison text-white": type === "poison",
      "bg-ground text-zinc-950": type === "ground",
      "bg-rock text-white": type === "rock",
      "bg-bug text-white": type === "bug",
      "bg-ghost text-white": type === "ghost",
      "bg-steel text-zinc-950": type === "steel",
      "bg-fire text-white": type === "fire",
      "bg-water text-white": type === "water",
      "bg-grass text-zinc-950": type === "grass",
      "bg-electric text-zinc-950": type === "electric",
      "bg-psychic text-white": type === "psychic",
      "bg-ice text-zinc-950": type === "ice",
      "bg-dragon text-white": type === "dragon",
      "bg-dark text-white": type === "dark",
      "bg-fairy text-zinc-950": type === "fairy",
      "bg-unknown text-white": type === "unknown",
      "bg-shadow text-white": type === "shadow",
    })}
    >
      {text}
    </div>
  ); 
}

export default Tag;
