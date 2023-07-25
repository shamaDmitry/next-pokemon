import { API_URL } from '@/lib/constants';
import { atom, useAtom, useAtomValue } from 'jotai'

export const getDataByPath = async (path) => {
  const req = await fetch(`${API_URL}/${path}`);
  const data = await req.json();

  return data.results;
}

const dataAtom = atom([{ name: "sss", url: "" }]);

const comboboxMenuFetchAtom = atom(
  get => get(dataAtom),
  async (_get, set, path) => set(dataAtom, (await getDataByPath(path)))
)

export const useComboboxMenuFetchAtom = () => useAtom(comboboxMenuFetchAtom);