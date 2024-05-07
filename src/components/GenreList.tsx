import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hook/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";


const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId=useGameQueryStore(s=>s.gameQuery.genreId);
  const setGenreId=useGameQueryStore(s=>s.setGenreId)
  
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
                fontWeight={dat.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setGenreId(dat.id)}
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
