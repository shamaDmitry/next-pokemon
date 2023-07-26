'use client';

import { useStateCallback } from "@/hooks/useStateCallback";
import { API_URL } from "@/lib/constants";
import { ArrowPathIcon, ArrowTrendingUpIcon, StopCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Button from "../core/atoms/Button";
import CustomCombobox from "../core/atoms/CustomCombobox";

const FiltersList = () => {
  const [data, setData] = useState();
  const [type, setType] = useState({ name: "", url: "" });
  const [ability, setAbility] = useState({ name: "", url: "" });

  const onFilter = () => {
    fetch(`/api/filter`, {
      method: 'POST',
      body: JSON.stringify(
        {
          type: type.name,
          ability: ability.name,
        }
      ),
    })
  }

  return (
    <div
      className="flex gap-4 mb-8"
    >
      <CustomCombobox
        label="type"
        prependIcon={<StopCircleIcon />}
        dataUrl="type"
        setFilter={setType}
      />

      <CustomCombobox
        label="ability"
        prependIcon={<StopCircleIcon />}
        dataUrl="ability"
        setFilter={setAbility}
      />

      {
        (type.name || ability.name) &&
        <Button
          icon={<ArrowPathIcon className="w-4 h-4 text-white" aria-hidden="true" />}
          onClick={() => onFilter()}
        />
      }
    </div>
  );
}

export default FiltersList;
