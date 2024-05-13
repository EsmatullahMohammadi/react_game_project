
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/Api-client";
import genres from "../data/genres";
import ms from "ms";
import Genre from "../entitys/Genre";

const apiClient= new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), // 24 hover
    initialData: genres
})

export default useGenres;