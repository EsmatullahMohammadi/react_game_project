
import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import { Genre } from "./useGenres";
import ApiClient from "../services/Api-client";
import platforms from "../data/platforms";

export interface Platform{
    name: string;
    id: number;
    slug: string;
}

const usePlatforms =() => useQuery({
    queryKey:['platforms'],
    queryFn:()=>
        ApiClient
            .get<FetchResponse<Platform>>('platforms/lists/parents')
            .then(res=>res.data),
    staleTime: 24*60*60*1000,
    // initialData: {count: platforms , results: platforms}
})

export default usePlatforms;