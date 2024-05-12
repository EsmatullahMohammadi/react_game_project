import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/Api-client";
import { Game } from "../entitys/Game";


const ApiInstance=new APIClient<Game>('games')

const useGame=(slug: string)=> useQuery({
    queryKey:['games', slug],
    queryFn: ()=> ApiInstance.get(slug)

})

export default useGame;