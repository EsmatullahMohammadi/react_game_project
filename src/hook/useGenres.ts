
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/Api-client";
import { FetchResponse } from "../services/Api-client";


export interface Genre{
    id:number;
    name: string;
    image_background:string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: ()=>  
        ApiClient
            .get<FetchResponse<Genre>>('/genres')
            .then(res=>res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hover
    // initialData: {count:genres.length , results:genres}
})

export default useGenres;