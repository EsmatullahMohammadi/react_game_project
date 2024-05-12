import { Box, Heading } from '@chakra-ui/react';
import React, { ReactNode } from 'react'

interface Probs{
    terms:string;
    children: ReactNode | ReactNode[]
}


const DefinationItem = ({terms, children}:Probs) => {

  return (
    <Box marginY={6}>
        <Heading as={'dt'} fontSize={'md'} color={'gray.600'}>
            {terms}
        </Heading>
        <dd>
            {children}
        </dd>
    </Box>
  )
}

export default DefinationItem