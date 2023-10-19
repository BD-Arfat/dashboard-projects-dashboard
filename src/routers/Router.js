import { createBrowserRouter } from "react-router-dom";
import Layouts from "../share/Layouts/Layouts";
import Dashboard from "../share/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Layouts/>,
        children : [
            {
                path : '/',
                element : <Dashboard/>
            }
        ]
    }
])