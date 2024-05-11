
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import React from 'react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatfomSelector from '../components/PlatfomSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
    <>
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={9}>
          <GameHeading  />
          <Flex >
            <Box marginRight={5}>
              <PlatfomSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  </>
  )
}

export default HomePage