import bullsEye from '../assets/bulls-eye.png';
import thumsUp from '../assets/thumbs-up.jpeg';
import meh from '../assets/meh.jpeg';
import { Image, ImageProps } from '@chakra-ui/react';

interface Probs{
    rating: number;
}

const Emoji = ({rating}: Probs) => {
    if(rating<3) return null;

    const emojiMap: {[key:number]: ImageProps} = {
        3: {src: meh, alt:'meh', boxSize:'25px'},
        4: {src: thumsUp, alt:'recommended',  boxSize:'25px'},
        5: {src: bullsEye,  alt:'exceptional', boxSize: '35px'},
    }
  return (
    <Image marginTop={1} { ...emojiMap[rating]}/>
  )
}

export default Emoji