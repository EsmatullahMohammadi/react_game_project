import useData from "./useData";
import { Genre } from "./useGenres";


interface Platform{
    name: string;
    id: number;
    slug: string;
}

const usePlatforms =(selectedPlatform?:
     Genre | null)=> useData<Platform>('/platforms/lists/parents',{params:{platforms:selectedPlatform?.id}})

export default usePlatforms;