import { createBrowserRouter } from "react-router-dom";
import * as React from "react";
import Index from "../pages";
import About from "../pages/about";
import Portfolio from "../pages/portfolio";
import Contact from "../pages/contact";
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
        path: '/contact',
        element: <Contact/>
    },
    {
        path: '*',
        element: <h1>Page not found</h1>
    }
])