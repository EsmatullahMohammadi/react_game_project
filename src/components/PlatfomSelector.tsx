import { Button, ListItem, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Children } from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hook/usePlatforms";

const PlatfomSelector = () => {

    const {data,error}=usePlatforms();

    if(error) return;
    
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map(platform=> <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatfomSelector;
