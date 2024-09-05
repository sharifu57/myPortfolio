import { createBrowserRouter } from "react-router-dom";
import * as React from "react";
import Index from "../pages";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Index/>
    },
])