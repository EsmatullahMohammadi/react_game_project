import { Box, Flex, Grid, GridItem,  Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hook/useGenres";
import PlatfomSelector from "./components/PlatfomSelector";
import { Platform } from "./hook/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery{
  genres: Genre | null;
  platforms: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
    const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={(searchText)=> setGameQuery({...gameQuery,searchText})} />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selctedGenre={gameQuery.genres}
              onSelectedGenre={(genres) => setGameQuery({...gameQuery, genres})}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box paddingLeft={9}>
            <GameHeading gameQuery={gameQuery}></GameHeading>
            <Flex >
              <Box marginRight={5}>
                <PlatfomSelector selectedPlatform={gameQuery.platforms }
                  onSelectePlatform={(platforms) => setGameQuery({...gameQuery,platforms})}
                />
              </Box>
              <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrders={(sortOrder) => setGameQuery({...gameQuery , sortOrder})}></SortSelector>
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery}  />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
