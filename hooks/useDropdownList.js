import { fetcher } from "@/lib/fetcher";
import useSWR from 'swr'

export const useDropdownList = (url) => {
  const { data, isLoading, error } = useSWR(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return { data, isLoading, error };
};