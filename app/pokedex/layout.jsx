import Filter from '@/components/core/atoms/Filter';
import SearchInput from '@/components/core/atoms/SearchInput';
import PokemonList from '@/components/PokedexPage/PokemonList';
import FiltersList from '@/components/PokedexPage/FiltersList';
import Input from '@/components/core/atoms/Input';

const Layout = ({ children, params }) => {
  return (
    <div className="flex items-start gap-8">
      <div className="w-full">
        <SearchInput />

        {/* <FiltersList /> */}

        <PokemonList />
      </div>

      {children}
    </div>
  );
}

export default Layout;
