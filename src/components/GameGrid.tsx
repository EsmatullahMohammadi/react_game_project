import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hook/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hook/useGenres";
import { GameQuery } from "../App";

interface Probs{
  gameQuery:GameQuery;
}

const GameGrid = ( {gameQuery}:Probs ) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={6 }
      >
        {isLoading &&
          skeletons.map((skeleton) =>
          <GameCardContainer key={skeleton} >
            <GameCardSkeleton/>
          </GameCardContainer>
          )}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard  game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
