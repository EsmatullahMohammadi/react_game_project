import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import DeatailPage from "./pages/DeatailPage";
import HomePage from "./pages/HomePage";


const routes=createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        children:[
            {
                path:"",
                element:<HomePage />
            },
            {
                path:"/games/:id",
                element:<DeatailPage />
            }
        ]
    }
])


export default routes;