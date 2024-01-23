import { Genre } from "../hook/useGenres";
import useGenres from "../hook/useGenres";
import { HStack, List, ListItem, Image,Text, Spinner, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Probs{
  onSelectedGenre: (genre: Genre) => void;
}


const GenreList = ({onSelectedGenre}: Probs) => {
  const { data,isLoading,error } = useGenres();
  if(isLoading) return <Spinner />
  if(error) return null;
  return (
    <List>
      {data.map((dat) => (
        <ListItem key={dat.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(dat.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            ></Image>
            <Button onClick={()=> onSelectedGenre(dat) } fontSize={'lg'} variant={'link'}>{dat.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
