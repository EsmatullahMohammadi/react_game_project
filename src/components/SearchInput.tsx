import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Probs{
    onSearch:(searchText: string)=> void;
}

const SearchInput = ({onSearch}:Probs) => {
    const ref= useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event)=>{
        //by preventDeafault we can access the value of this form
        event.preventDefault();
        if(ref.current) onSearch(ref.current.value);
    }}>
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input ref={ref} borderRadius={20} placeholder="Search games" variant="filled" />
        </InputGroup>
    </form>
  );
};

export default SearchInput;
