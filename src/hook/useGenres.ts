
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/Api-client";
import genres from "../data/genres";
import ms from "ms";

const apiClient= new APIClient<Genre>('/genres');

export interface Genre{
    id:number;
    name: string;
    image_background:string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), // 24 hover
    initialData: genres
})

export default useGenres;