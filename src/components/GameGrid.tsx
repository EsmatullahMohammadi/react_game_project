import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGames from "../hook/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Probs{
  gameQuery:GameQuery;
}

const GameGrid = ( {gameQuery}:Probs ) => {
  const { data, error, isLoading,  fetchNextPage, hasNextPage} = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6,7,8];

  if(error) return <Text>{error.message}</Text>

  const fetchGamesCount=data?.pages.reduce((total, page)=>total+page.results.length , 0)|| 0;

  return (
      <InfiniteScroll
       dataLength={fetchGamesCount}
       hasMore={ !!hasNextPage}
       next={()=>fetchNextPage()}
       loader={
        <Box display="flex" justifyContent="center" alignItems="center" py={4}>
          Loading <Spinner size="lg" />
        </Box>}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6 }
          padding={10}
        >
          {isLoading &&
            skeletons.map((skeleton) =>
            <GameCardContainer key={skeleton} >
              <GameCardSkeleton/>
            </GameCardContainer>
            )}
            {data?.pages.map((page, index) =>
              <React.Fragment key={index}>
                {page.results.map((game)=>( 
                  <GameCardContainer key={game.id}>
                    <GameCard  game={game} />
                  </GameCardContainer>
                ))}
              </React.Fragment>)}
        </SimpleGrid>
      </InfiniteScroll>
      /* {hasNextPage &&(
        <Button onClick={()=>fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? 'Loading...' :'Load More'} 
        </Button>
      )} */
  );
};

export default GameGrid;
