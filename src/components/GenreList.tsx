import { Genre } from "../hook/useGenres";
import useGenres from "../hook/useGenres";
import useData from "../hook/useData";
import { HStack, List, ListItem, Image,Text, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
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
            <Text fontSize={'lg'}>{dat.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
