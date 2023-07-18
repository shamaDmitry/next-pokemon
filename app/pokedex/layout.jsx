import Button from '@/components/core/atoms/Button';
import Dropdown from '@/components/core/atoms/Dropdown';
import Filter from '@/components/core/atoms/Filter';
import Input from '@/components/core/atoms/Input';
import SearchInput from '@/components/core/atoms/SearchInput';
import PokemonList from '@/components/PokedexPage/PokemonList';

const Layout = ({ children }) => {
  return (
    <div className="flex gap-8">
      <div className="w-full">
        <SearchInput></SearchInput>

        <div className="flex justify-between mb-6">
          <Filter></Filter>

          <div className="flex gap-2">
            <span>from</span>
            <Input></Input>
            <span>to</span>
            <Input></Input>
          </div>
        </div>

        <div className="flex gap-2 mb-10">
          <Dropdown></Dropdown>
          <Dropdown></Dropdown>
          <Dropdown></Dropdown>
          <Dropdown></Dropdown>
          <Dropdown></Dropdown>

          <Button></Button>
        </div>

        <PokemonList />
      </div>

      <div className="w-full max-w-sm">
        {children}
      </div>
    </div>
  );
}

export default Layout;
