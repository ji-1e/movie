import React from "react";
import { Routes, Route } from "react-router-dom"
import App from "./App" //메인 페이지
import MovieDetail from "./MovieDetail" //상세 페이지

const RouteComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/details" element={<MovieDetail />} />
        </Routes>
    )
}

export default RouteComponent;