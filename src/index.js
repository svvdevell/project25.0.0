import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound"
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "users",
                element: <Users/>
            },
            {
                path: "users/:userId",
                element: <User/>
            },
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);