import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../paths/home";
import Inventory from "../paths/inventory";
import Product from "../paths/product";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="inventory/" element={<Inventory/>}/>
                <Route path="home/" element={<Product/>}/>
            </Routes>
        </BrowserRouter>
    )
}
