
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/Api-client";
import platforms from "../data/platforms";
import ms from "ms";

const apiClient=new APIClient<Platform>("platforms/lists/parents");

export interface Platform{
    name: string;
    id: number;
    slug: string;
}

const usePlatforms =() => useQuery({
    queryKey:['platforms'],
    queryFn:apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms
})

export default usePlatforms;