import { Center, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import useGame from '../hook/useGame';
import DefinationItem from '../components/DefinationItem';
import CritcScore from '../components/CritcScore';
import GameAttribute from '../components/GameAttribute';

const DeatailPage = () => {
  const {slug}=useParams();
  // (slug!) It say that slug can't be undefined
  const {data:game, isLoading,error}=useGame(slug!);
  if(isLoading) return  <Center> Loading <Spinner /> </Center>
  if(error || !game) throw (error);
  
  return (
    <>
      <Heading alignContent={'center'}>{game.name}</Heading>
      <ExpandableText children={game.description_raw}></ExpandableText>
      <GameAttribute game={game}></GameAttribute>
    </>
  )
}

export default DeatailPage