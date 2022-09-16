import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalState } from "../global/globalState";
import Home from "../paths/home";
import Inventory from "../paths/inventory";
import Product from "../paths/product";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="inventory/" element={<GlobalState><Inventory/></GlobalState>}/>
                <Route path="home/" element={<GlobalState><Product/></GlobalState>}/>
            </Routes>
        </BrowserRouter>
    )
}
