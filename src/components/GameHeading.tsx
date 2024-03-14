import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenre from '../hook/useGenre';
import usePlatform from '../hook/usePlatform';

interface Probs{
  gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Probs) => {

  const genre= useGenre(gameQuery.genreId);
  const platform= usePlatform(gameQuery.platformId);
  const heading=`${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading fontSize={"5xl"} marginY={5} as={"h1"}>{heading}</Heading>
  )
}

export default GameHeading