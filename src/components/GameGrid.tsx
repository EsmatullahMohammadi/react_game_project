import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import ApiClient from "../services/Api-client";

interface Game {
  id: number;
  name: string;
}
interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [game, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    ApiClient.get<FetchGameResponse>("/games")
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.message));
  });

  return (
    <>
        {error&&<Text>{error}</Text>}
       <ul>
            {game.map(g=> <li key={g.id}>{g.name}</li>)}
       </ul>
    </>
  );
};

export default GameGrid;
