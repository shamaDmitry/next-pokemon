import Filter from '@/components/core/atoms/Filter';
import SearchInput from '@/components/core/atoms/SearchInput';
import PokemonList from '@/components/PokedexPage/PokemonList';
import FiltersList from '@/components/PokedexPage/FiltersList';

const Layout = ({ children, params }) => {
  return (
    <div className="flex items-start gap-8">
      <div className="w-full">
        <SearchInput />

        <div className="flex items-center justify-between mb-6">
          <div className="w-full md:max-w-xs">
            <Filter />
          </div>

          {/* <div className="flex items-center gap-2">
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
          </div> */}
        </div>

        <FiltersList />

        <PokemonList />
      </div>

      {children}
    </div>
  );
}

export default Layout;
