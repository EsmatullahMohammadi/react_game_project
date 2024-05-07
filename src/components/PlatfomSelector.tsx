import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hook/usePlatform";
import usePlatforms from "../hook/usePlatforms";
import useGameQueryStore from "../store";

const PlatfomSelector = () => {
  const { data, error } = usePlatforms();
  
  const selectedPlatformId=useGameQueryStore(s=>s.gameQuery.platformId)
  const selectedPlatform=usePlatform(selectedPlatformId);

  const setPlatformId=useGameQueryStore(s=>s.setPlatformId);

  if (error) return;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms  '}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatfomSelector;
