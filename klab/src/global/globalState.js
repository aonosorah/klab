import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from './globalContext'

export const GlobalState = (props) => {
    const provider = GlobalContext.Provider;
    const [ product, setProcudt ] = useState([]);
    const navigate = useNavigate()
    
    const values = { product, setProcudt }
    const Provider = GlobalContext.Provider
    return (
        <Provider value={values}>{props.children}</Provider>
    )
}