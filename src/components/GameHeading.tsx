import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenres from '../hook/useGenres';
import usePlatforms from '../hook/usePlatforms';

interface Probs{
  gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Probs) => {

  const {data: genres}= useGenres();
  const genre=genres?.results.find(g=>g.id===gameQuery.genreId);
  
  const {data: platforms}=usePlatforms();
  const platform=platforms?.results.find(p=>p.id===gameQuery.platformId)

  const heading=`${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading fontSize={"5xl"} marginY={5} as={"h1"}>{heading}</Heading>
  )
}

export default GameHeading