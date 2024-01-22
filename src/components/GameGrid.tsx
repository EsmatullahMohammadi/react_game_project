import { Text } from "@chakra-ui/react";
import useGames from "../hook/useGames";


const GameGrid = () => {
  const {game,error}=useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {game.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
