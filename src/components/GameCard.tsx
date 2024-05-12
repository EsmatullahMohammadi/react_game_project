
import { Game } from '../hook/useGames'
import { Card,CardBody,HStack,Heading,Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CritcScore from './CritcScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';
import { Link } from 'react-router-dom';

interface Probs{
  game:Game;
}
const GameCard = ({game}:Probs) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}/>
      <CardBody>
        <HStack marginBottom={3} justifyContent={'space-between'}>
          <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
          <CritcScore score={game.metacritic}/>
        </HStack>
        <Heading fontStyle={"2xl"}>
          <Link to={"games/"+game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} /> 
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard