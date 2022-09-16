import React, { useContext } from 'react'
import { HeaderHome } from '../sections/header'
import { GlobalContext } from '../global/globalContext'
import { CardBox } from '../styled/prodStyled'
import { images } from '../constants/images'
import { Img, MainBox } from '../styled/prodStyled'

export default function Product() {

  const { list } = useContext(GlobalContext)
  
  const product = list.map((item, index) => { 
      const pImage = item.imagem.split(".")
      return <CardBox key={index}>
      <div><Img src={images[pImage[0]]} alt="imagem produto"/></div>
      <div>
        <p>{item.produto}</p>
        <p>{item.quantidade}</p>
      </div>
    </CardBox>
  }) 

  return (
    <div>
        <HeaderHome/>
        <MainBox>
          {product}
        </MainBox>
    </div>
  )
}
