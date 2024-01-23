import { useState,useEffect } from "react";
import ApiClient from "../services/Api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponse<T> {
    count:number;
    results:T[];
}
const useData =<T> (endpoint:string, requestConfig?:AxiosRequestConfig,deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setLoding]= useState(false);
  
    useEffect(() => {
      const controller= new AbortController();
      setLoding(true);
      ApiClient
        .get<FetchResponse<T>>(endpoint,{signal:controller.signal, ...requestConfig})
        .then((res) =>{
          setLoding(false);
          setData(res.data.results)})
        .catch((err) =>{
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoding(false);
        });
    },deps?[...deps]:[]);

    return {data,error,isLoading};
};
export default useData;