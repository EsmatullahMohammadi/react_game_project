import { Badge } from '@chakra-ui/react';

interface Probs{
    score:number;
}
const CritcScore = ({score}:Probs) => {
  let color=score>75 ?'green': score>60 ?'yellow':'';
  return (
    <Badge colorScheme={color} borderRadius={'4px'} fontSize={'14px'} paddingX={2}>{score}</Badge>
  )
}

export default CritcScore