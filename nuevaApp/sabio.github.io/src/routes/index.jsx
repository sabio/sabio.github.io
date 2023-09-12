import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Main from "../components/Main";
import Index from "../components/Index";
import WhoAmI from "../components/WhoAmI";
import Experience from "../components/Experience";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "",
                element: <Index />,
            },
            {
                path: 'who-am-i',
                element: <WhoAmI />
            },
            {
                path: 'experience',
                element: <Experience />
            },
        ],
    }
]);

const MyRoutes = () => <RouterProvider router={router} />;
    


export default MyRoutes;