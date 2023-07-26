import { API_URL } from '@/lib/constants';
import { create } from 'zustand'

const usePokemonStore = create((set) => ({
  pokemons: [],
  getAllPokemons: async (limit) => {
    const res = await fetch(`${API_URL}/pokemon?limit=${limit}`);
    const pokemons = await res.json();

    set({ pokemons: pokemons.results })
  },
  setPokemons: (pokemons) => {
    set({ pokemons })
  }
}))

export default usePokemonStore;