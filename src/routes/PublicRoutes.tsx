import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import NotFound from "../pages/NotFound";
import ROUTE_PATHS from "./RoutePath"

const PublicRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path={ROUTE_PATHS.HOME} element={<Home />} />
            <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />
            <Route path={ROUTE_PATHS.REGISTER} element={<Register />} />
            <Route path={ROUTE_PATHS.NOT_FOUND} element={<NotFound />} />
        </Routes>
    )
}

export default PublicRoutes;