import { Box, Center, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttribute from '../components/GameAttribute';
import useGame from '../hook/useGame';
import GameTrailer from '../components/GameTrailer';
import GameScreenshot from '../components/GameScreenshot';

const DeatailPage = () => {
  const {slug}=useParams();
  // (slug!) It say that slug can't be undefined
  const {data:game, isLoading,error}=useGame(slug!);
  if(isLoading) return  <Center> Loading <Spinner /> </Center>
  if(error || !game) throw (error);
  
  return (
    <>
      <SimpleGrid columns={{base:1 , md:2}} spacing={5} >
        <Box>
          <Heading alignContent={'center'}>{game.name}</Heading>
          <ExpandableText children={game.description_raw} />
          <GameAttribute game={game} />
        </Box>
        <Box>
          <GameTrailer gameId={game.id}/>
          <GameScreenshot gameId={game.id}/>
        </Box>
      </SimpleGrid>
    </>
  )
}

export default DeatailPage