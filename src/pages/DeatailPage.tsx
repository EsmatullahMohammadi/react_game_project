import { Center, Heading, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import useGame from '../hook/useGame';

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
    </>
  )
}

export default DeatailPage