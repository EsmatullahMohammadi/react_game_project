import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes.tsx";
import theme from "./theme.ts";

const queryClient = new QueryClient(); 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        {/* <App /> */}
        <RouterProvider router={routes}/>
        <ReactQueryDevtools />  
      </QueryClientProvider>    
    </ChakraProvider>
  </React.StrictMode>
);
