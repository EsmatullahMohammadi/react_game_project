
import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import ApiClient from "../services/Api-client";
import { FetchResponse } from "../services/Api-client"; 
import { Platform } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform: Platform}[];
    metacritic:number;
    rating_top: number;   
  }

const useGames =(gameQuery:GameQuery)=>
                  useQuery<FetchResponse<Game>,Error>({
                    queryKey: ['games' , gameQuery],
                    queryFn: ()=>
                      ApiClient
                        .get<FetchResponse<Game>>('/games', {
                          params:{
                            genres: gameQuery.genres?.id,
                            parent_platforms:gameQuery.platforms?.id,
                            ordering: gameQuery.sortOrder,
                            search: gameQuery.searchText
                          }
                        })
                        .then(res=>res.data)                
                  })

export default useGames;