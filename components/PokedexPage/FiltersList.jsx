'use client';

import { API_URL } from "@/lib/constants";
import { ArrowPathIcon, StopCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Button from "../core/atoms/Button";
import CustomCombobox from "../core/atoms/CustomCombobox";

const FiltersList = () => {
  const [data, setData] = useState();
  const [type, setType] = useState({});
  const [ability, setAbility] = useState({});

  const onFilter = () => {

    // fetch(`/api/filter`, {
    //   method: 'POST',
    //   body: JSON.stringify(
    //     type,
    //     ability
    //   ),
    // })
    console.log(
      { type, ability }
    );
  }

  return (
    <div
      className="flex items-center gap-4"
    >
      <div>
        {JSON.stringify(type)}

        <CustomCombobox
          label="type"
          dataUrl="type"
          prependIcon={<StopCircleIcon />}
          value={type}
          setFilter={setType}
          onChange={onFilter}
        />
      </div>

      <div>
        {JSON.stringify(ability)}

        <CustomCombobox
          label="ability"
          dataUrl="ability"
          prependIcon={<StopCircleIcon />}
          value={ability}
          setFilter={setAbility}
        />
      </div>

      <Button
        icon={<ArrowPathIcon className="w-4 h-4 text-white" aria-hidden="true" />}
        onClick={() => {
          setType({})
          setAbility({})
        }}
      />
    </div>
  );
}

export default FiltersList;
