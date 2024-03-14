import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatfomSelector from "./components/PlatfomSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hook/usePlatforms";

export interface GameQuery{
  genreId?: number;
  platformId?: number;
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
              selctedGenreId={gameQuery.genreId}
              onSelectedGenre={(genre) => setGameQuery({...gameQuery, genreId:genre.id})}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box paddingLeft={9}>
            <GameHeading gameQuery={gameQuery}></GameHeading>
            <Flex >
              <Box marginRight={5}>
                <PlatfomSelector selectedPlatformId={gameQuery.platformId }
                  onSelectePlatform={(platforms) => setGameQuery({...gameQuery,platformId: platforms.id})}
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
