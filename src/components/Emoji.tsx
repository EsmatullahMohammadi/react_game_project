import bullsEye from '../assets/bulls-eye.png';
import thumsUp from '../assets/thumbs-up.jpeg';
import like from '../assets/like.jpeg';
import { Image, ImageProps } from '@chakra-ui/react';

interface Probs{
    rating: number;
}

const Emoji = ({rating}: Probs) => {
    if(rating<3) return null;

    const emojiMap: {[key:number]: ImageProps} = {
        3: {src: like, alt:'meh', boxSize:'25px'},
        4: {src: thumsUp, alt:'recommended',  boxSize:'25px'},
        5: {src: bullsEye,  alt:'exceptional', boxSize: '25px'},
    }
  return (
    <Image borderRadius={15} marginTop={1} { ...emojiMap[rating]}/>
  )
}

export default Emoji