import { Box } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

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