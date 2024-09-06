import { createBrowserRouter } from "react-router-dom";
import * as React from "react";
import Index from "../pages";
import About from "../pages/about";
import Portfolio from "../pages/portfolio";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Index/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/portfolio',
        element: <Portfolio/>
    },
    {
        path: '*',
        element: <h1>Page not found</h1>
    }
])