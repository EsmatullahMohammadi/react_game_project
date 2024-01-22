import React from 'react'
import { Game } from '../hook/useGames'
import { Card,CardBody,Heading,Image } from '@chakra-ui/react';

interface Probs{
  game:Game;
}
const GameCard = ({game}:Probs) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}/>
      <CardBody>
        <Heading fontStyle={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard