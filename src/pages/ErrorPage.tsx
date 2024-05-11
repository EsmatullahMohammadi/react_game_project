import React from 'react'
import { isRouteErrorResponse, useRouteError, useRoutes } from 'react-router-dom'
import NavBar from '../components/NavBar';
import { Box } from '@chakra-ui/react';

const ErrorPage = () => {
    const routError=useRouteError();
    // const rout=useRoutes(routError);
  return (
    <div>
        <NavBar></NavBar>
        <Box padding={5} fontSize={25}>
            <h1>OOPS</h1>
            <p>{isRouteErrorResponse(routError) ? "This page doesn't exist" : "An error ocured"}</p>
        </Box>
    </div>
  )
}

export default ErrorPage