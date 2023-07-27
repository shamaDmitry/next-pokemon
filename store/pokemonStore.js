import { API_URL } from '@/lib/constants';
import { create } from 'zustand'

const usePokemonStore = create((set, get) => ({
  searchTerm: "",
  setSearchTerm: (searchTerm) => set((state) => ({ searchTerm })),
  pokemons: [],
  offset: 0,
  setOffset: (offset) => set((state) => ({ offset })),
  limit: 6,
  setLimit: (limit) => set((state) => ({ limit })),
  getAllPokemons: async () => {
    const limit = get().limit;
    const offset = get().offset;

    const res = await fetch(`${API_URL}/pokemon?offset=${offset}&limit=${limit}`);
    const pokemons = await res.json();

    set({ pokemons: pokemons.results })
  },
  setPokemons: (pokemons) => {
    set({ pokemons })
  }
}))

export default usePokemonStore;