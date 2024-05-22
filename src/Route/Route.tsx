
import Layout from "../Layout/Layout";
import Contain from "../pages/Contain";
import Home from "../pages/Home/Home";
import ContainTwo from "../pages/ContainTwo";
import Resource from "../pages/Resource";
import SideBars from "../pages/Sidebar/SideBars";

export const Routes = [
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                path:"/home",
                element: <Home/>
            },
            {
                path:"/",
                element: <Contain/>
            },
            {
                path: "/list",
                element: <ContainTwo/>
            },
            {
                path: "/res",
                element: <Resource/>
            },
            {
                path: "/sidebars/*",
                element: <SideBars/>
            }
            
        ]
    },
    {
        path:"/cont",
        element: <Contain/>,
        children: [
            
            
        ]
    }
]