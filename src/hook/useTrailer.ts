
import APIClient from "../services/Api-client";
import Trailer from "../entitys/Trailer";
import { useQuery } from "@tanstack/react-query";

const useTrailers=(gameId: number)=>{
    const ApiClient=new APIClient<Trailer>(`/games/${gameId}/movies`);
    return useQuery({
        queryKey:['trailers',gameId],
        queryFn: ApiClient.getAll
    })
}

export default useTrailers;