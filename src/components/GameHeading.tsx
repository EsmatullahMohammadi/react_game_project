import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Probs{
  gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Probs) => {

  const heading=`${gameQuery.platforms?.name || ''} ${gameQuery.genres?.name || ''} Games`;

  return (
    <Heading fontSize={"5xl"} marginY={5} as={"h1"}>{heading}</Heading>
  )
}

export default GameHeading