
import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/Api-client";

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