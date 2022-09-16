import React, { useEffect, useState } from 'react'
import { HeaderHome } from '../sections/productHeader'

import { CardBox } from '../styled/prodStyled'
import { images } from '../constants/images'
import { Img, MainBox } from '../styled/prodStyled'
import product from '../products/repositorio.json'

export default function Product() {

  const [ list, setList ] = useState([])
  const [ selects, setSelects ] = useState(0)

  useEffect(() => {
    const newList = product.filter((item) => {
      if (selects == 1 && item.defeito > 0) {
          return item
      }
      if (selects == 2 && item.defeito === 0) {
          return item
      }
      if (selects == 0) {
          return item
      }
  })
  setList(newList)
  }, [selects])


  const productList = list.map((item, index) => { 
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
        <HeaderHome selects={selects} setSelects={setSelects}/>
        <MainBox>
          {productList}
        </MainBox>
    </div>
  )
}
