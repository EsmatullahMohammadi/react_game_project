import { Image, SimpleGrid } from '@chakra-ui/react';
import useScreenShot from '../entitys/useSchreenShot';
interface Probs{
    gameId:number;
}

const GameScreenshot = ({gameId}:Probs) => {
    const{data,isLoading,error}=useScreenShot(gameId);
    if(isLoading) return null;
    if(error) throw error;
    
    return(
        <SimpleGrid columns={{base:1 , md:2}} spacing={3}>
            {data?.results.map(file=> <Image key={file.id} src={file.image}  />)}
        </SimpleGrid>
    ) 


}

export default GameScreenshot