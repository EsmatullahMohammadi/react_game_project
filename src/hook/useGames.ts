import { useState,useEffect } from "react";
import ApiClient from "../services/Api-client";
import { CanceledError } from "axios";

export interface Platform{
    id:number;
    name:string;
    slug:string;
}
export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform: Platform}[];
    metacritic:number;
  }
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }

const useGames =()=>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setLoding]= useState(false);
  
    useEffect(() => {
      const controller= new AbortController();
      setLoding(true);
      ApiClient
        .get<FetchGameResponse>("/games",{signal:controller.signal})
        .then((res) =>{
          setLoding(false);
          setGames(res.data.results)})
        .catch((err) =>{
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoding(false);
        });
    },[]);

    return {games,error,isLoading};
}

export default useGames;