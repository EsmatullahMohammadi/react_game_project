import { Genre } from "../hook/useGenres";
import useGenres from "../hook/useGenres";
import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Probs {
  onSelectedGenre: (genre: Genre) => void;
  selctedGenreId?: number;
}

const GenreList = ({ onSelectedGenre, selctedGenreId }: Probs) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {data?.results.map((dat) => (
          <ListItem key={dat.id} paddingY="5px">
            <HStack>
              <Image
                objectFit='cover'
                src={getCroppedImageUrl(dat.image_background)}
                boxSize={"32px"}
                borderRadius={8}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign='left'
                fontWeight={dat.id === selctedGenreId ? "bold" : "normal"}
                onClick={() => onSelectedGenre(dat)}
                fontSize={"lg"}
                variant={"link"}
              > 
                {dat.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
