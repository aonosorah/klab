import React, { useContext, useState } from 'react'
import { HeaderInventory } from '../sections/inventoryHeader'
import { Table, Box, P, PP, MainBox } from '../styled/invStyled'
import { GlobalContext } from '../global/globalContext'

export default function Inventory() {
const [ alphabetic, setAlphabetic ] = useState(0)
 const { list } = useContext(GlobalContext)
 const auxList = [...list]
 const newList = alphabetic == 1 ? [...auxList.sort( (a,b)  => {
  if (a.produto > b.produto) {
       return 1;
  }
  if (a.produto < b.produto) {
       return -1;
  }
  return 0;
})] : [...list]
 const product = newList.map((item, index) => { 
  const price = item.valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
  return (<Table key={index}>
  <Box><PP>{item.produto}</PP></Box>
  <Box><PP>{item.quantidade}</PP></Box>
  <Box><PP>{item.defeito}</PP></Box>
  <Box><PP>{item.quantidade - item.defeito}</PP></Box>
  <Box><PP>{price}</PP></Box>

  </Table>)})
  
 return (
    <div>
      <HeaderInventory alphabetic={alphabetic} setAlphabetic={setAlphabetic}/>
    <MainBox>
      <Table> 
        <Box><P>Produto</P></Box>
        <Box><P>Quantidade</P></Box>
        <Box><P>Defeito</P></Box>
        <Box><P>Disponivel para Vendas</P></Box>
        <Box><P>Valor</P></Box>
      </Table>
        {product}
    </MainBox>
  </div>
  )
}

