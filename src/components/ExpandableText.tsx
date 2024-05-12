import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Probs{
    children:string;
}

const ExpandableText = ({children}:Probs) => {
    const[expandText,setExpandText]=useState(false);
    const limit=300;
    if(children.length<=limit)
        return <Text>{children}</Text>
    if(!children) return null;
    
    const summary= expandText?children: children.substring(0,limit)+"...";
  return (
    <Text>
        {summary}
        <Button marginLeft={1} size={"xs"} fontWeight={'bold'} colorScheme="yellow" onClick={()=>setExpandText(!expandText)}>{expandText ? "show less":"read more"}</Button>
    </Text>
  )
}

export default ExpandableText