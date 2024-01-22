import { useState,useEffect } from "react";
import ApiClient from "../services/Api-client";
import { CanceledError } from "axios";


interface Genres{
    id:number;
    name: string;
}

interface FetchGenresResponse {
    count:number;
    results:Genres[];
}
const useGenres = () => {
    const [genres, setGenres] = useState<Genres[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setLoding]= useState(false);
  
    useEffect(() => {
      const controller= new AbortController();
      setLoding(true);
      ApiClient
        .get<FetchGenresResponse>("/genres",{signal:controller.signal})
        .then((res) =>{
          setLoding(false);
          setGenres(res.data.results)})
        .catch((err) =>{
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoding(false);
        });
    },[]);

    return {genres,error,isLoading};
};
export default useGenres;