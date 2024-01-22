import React from 'react'
import { Game } from '../hook/useGames'
import { Card,CardBody,Heading,Image,Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';

interface Probs{
  game:Game;
}
const GameCard = ({game}:Probs) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}/>
      <CardBody>
        <Heading fontStyle={"2xl"}>{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
      </CardBody>
    </Card>
  )
}

export default GameCard