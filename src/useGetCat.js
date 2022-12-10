import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useGetCat = () => {
  const fetchData = async () => {
    let data = await Axios.get("https://catfact.ninja/fact");
    return data.data;
  };
  const { data, isLoading, error, refetch } = useQuery(["cat"], fetchData);
  return { data, refetch, isLoading, error };
};
