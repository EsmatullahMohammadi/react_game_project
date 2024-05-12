
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/Api-client";
import platforms from "../data/platforms";
import ms from "ms";
import { Platform } from "../entitys/Platform";

const apiClient=new APIClient<Platform>("platforms/lists/parents");

const usePlatforms =() => useQuery({
    queryKey:['platforms'],
    queryFn:apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms
})

export default usePlatforms;