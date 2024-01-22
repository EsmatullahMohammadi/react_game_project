
import { Game } from '../hook/useGames'
import { Card,CardBody,HStack,Heading,Image,Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CritcScore from './CritcScore';
import getCroppedImageUrl from '../services/image-url';

interface Probs{
  game:Game;
}
const GameCard = ({game}:Probs) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}/>
      <CardBody>
        <Heading fontStyle={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
          <CritcScore score={game.metacritic}/>
        </HStack>
        
      </CardBody>
    </Card>
  )
}

export default GameCard