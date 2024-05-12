import { SimpleGrid, Text } from '@chakra-ui/react'
import { Game } from '../entitys/Game'
import CritcScore from './CritcScore'
import DefinationItem from './DefinationItem'

interface Probs{
    game:Game;
}

const GameAttribute = ({game}:Probs) => {
  return (
    <SimpleGrid columns={2} as={'dl'}>
    <DefinationItem terms='Platforms'>
      {game.parent_platforms?.map(({platform})=>(
        <Text key={platform.id}>{platform.name}</Text>
      ))}
    </DefinationItem>
    <DefinationItem terms='MetaScore'>
      <CritcScore score={game.metacritic}></CritcScore>
    </DefinationItem>
    <DefinationItem terms='Genres'>
      {game.genres.map(genre=> <Text key={genre.id}>{genre.name}</Text>)}
    </DefinationItem>
    <DefinationItem terms='Publishers'>
      {game.publishers?.map(publish=> <Text key={publish.id}>{publish.name}</Text>)}
    </DefinationItem>
  </SimpleGrid>
  )
}

export default GameAttribute