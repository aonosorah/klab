import React from 'react'
import { HeaderInventory } from '../sections/header'
import list from '../products/repositorio.json'
import { Table, Box, P, PP, MainBox } from '../styled/invStyled'

export default function Inventory() {

 
 const product = list.map((item) => { return (<Table>
  <Box><PP>{item.produto}</PP></Box>
  <Box><PP>{item.quantidade}</PP></Box>
  <Box><PP>{item.defeito}</PP></Box>
  <Box><PP>{item.quantidade - item.defeito}</PP></Box>
  <Box><PP>{item.valor}</PP></Box>

  </Table>)})
  
 return (
    <div>
      <HeaderInventory/>
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

