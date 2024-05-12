import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import DeatailPage from "./pages/DeatailPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";


const routes=createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        errorElement:<ErrorPage />,
        children:[
            {
                path:"",
                element:<HomePage />
            },
            {
                path:"/games/:slug",
                element:<DeatailPage />,
                
            }
        ]
    }
])


export default routes;