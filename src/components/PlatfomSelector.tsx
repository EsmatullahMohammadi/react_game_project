import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hook/usePlatforms";
import { Platform } from "../hook/usePlatforms";
import usePlatform from "../hook/usePlatform";

interface Probs {
  onSelectePlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatfomSelector = ({ onSelectePlatform,selectedPlatformId}: Probs) => {
  const { data, error } = usePlatforms();
  const selectedPlatform=usePlatform(selectedPlatformId);

  if (error) return;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms  '}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
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
