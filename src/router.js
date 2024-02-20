import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainPages from "./pages/MainPages";

const router = createBrowserRouter([
    {path: "", element: <MainLayout/>},
    {index: true, element: <Navigate to={"main"}/>},
    {path: "/main", element: <MainPages/>},
]);

export {
    router,
};