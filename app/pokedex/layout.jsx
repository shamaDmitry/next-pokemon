import Button from '@/components/core/atoms/Button';
import Dropdown from '@/components/core/atoms/Dropdown';
import Filter from '@/components/core/atoms/Filter';
import Input from '@/components/core/atoms/Input';
import SearchInput from '@/components/core/atoms/SearchInput';
import PokemonList from '@/components/PokedexPage/PokemonList';
import { ArrowPathIcon, StopCircleIcon } from '@heroicons/react/24/solid';

const Layout = ({ children, params }) => {
  return (
    <div className="flex items-start gap-8">
      <div className="w-full">
        <SearchInput />

        <div className="flex items-center justify-between mb-6">
          <div className="w-full md:max-w-xs">
            <Filter />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">from</span>
            <Input
              type="number"
              className="w-full max-w-[100px] text-right"
            />
            <span className="text-sm font-bold">to</span>
            <Input
              type="number"
              className="w-full max-w-[100px] text-right"
            />
          </div>
        </div>

        <div className="flex gap-2 mb-10">
          <Dropdown
            prependIcon={<StopCircleIcon />}
            placeholder="type"
          />
          <Dropdown
            prependIcon={<StopCircleIcon />}
            placeholder="weaknesses"
          />

          <Dropdown
            prependIcon={<StopCircleIcon />}
            placeholder="ability"
          />

          <Dropdown
            prependIcon={<StopCircleIcon />}
            placeholder="height"
          />

          <Dropdown
            prependIcon={<StopCircleIcon />}
            placeholder="weight"
          />

          <Button
            icon={<ArrowPathIcon className="w-4 h-4 text-white" aria-hidden="true" />} />
        </div>

        <PokemonList />
      </div>

      {children}
    </div>
  );
}

export default Layout;
