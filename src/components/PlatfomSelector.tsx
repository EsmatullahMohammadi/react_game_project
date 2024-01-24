import {
  Button,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Children } from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hook/usePlatforms";
import { Genre } from "../hook/useGenres";
import { Platform } from "../hook/useGames";

interface Probs {
  onSelectePlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatfomSelector = ({ onSelectePlatform,selectedPlatform }: Probs) => {
  const { data, error } = usePlatforms();

  if (error) return;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms  '}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectePlatform(platform)}
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
