import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from './globalContext'
import product from '../products/repositorio.json'

export const GlobalState = (props) => {
    const Provider = GlobalContext.Provider
    const [ search, setSearch ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ order, setOrder ] = useState(0)
    const [ list, setList ] = useState([])
    const navigate = useNavigate()
 
    useEffect (() => {
     const newList = product.filter((item) => {
        if (item.produto.toLowerCase().includes(search.toLowerCase()) && item.quantidade > order) {
            return item
        }
    })
     setList(newList)
 }, [search, order])
   
    
    const values = { search, setSearch, price, setPrice, order, setOrder, list }
    
    return (
        <Provider value={values}>{props.children}</Provider>
    )
}