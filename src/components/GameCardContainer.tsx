import { Box } from "@chakra-ui/react";
import{ ReactNode } from "react";

interface Probs {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Probs) => {
  return (
    <Box
     borderRadius={10} 
     overflow={"hidden"}
    _hover={{
      transform: 'scale(1.05)',
      transition: 'transform .15s eas-in'
    }}>
        {children}
    </Box>
  );
};

export default GameCardContainer;
