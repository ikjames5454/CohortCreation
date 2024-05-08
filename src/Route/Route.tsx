
import Layout from "../Layout/Layout";
import Contain from "../pages/Contain";
import Home from "../pages/Home/Home";

export const Routes = [
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                path:"/",
                element: <Contain/>
            },
            {
                path:"/home",
                element: <Home/>
            }
            
        ]
    }
]