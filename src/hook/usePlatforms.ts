
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/Api-client";

const apiClient=new APIClient<Platform>("platforms/lists/parents");

export interface Platform{
    name: string;
    id: number;
    slug: string;
}

const usePlatforms =() => useQuery({
    queryKey:['platforms'],
    queryFn:apiClient.getAll,
    staleTime: 24*60*60*1000,
    // initialData: {count: platforms , results: platforms}
})

export default usePlatforms;