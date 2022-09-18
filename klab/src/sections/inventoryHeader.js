import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../global/globalContext';
import { goHome, goBack } from '../routes/coordinator'
import { TitleBox, ButtonBox} from '../styled/homeStyled'
import { TitleIn, ButtonIn, InputIn, Select } from '../styled/invStyled'



export function HeaderInventory({alphabetic, setAlphabetic}) {
    const navigate = useNavigate()
    
    const { search, setSearch, order, setOrder } = useContext(GlobalContext)
    const onChangeInput = (e) => { setSearch(e.target.value) }
    const onChangeSelect = (e) => { setOrder(e.target.value)}
    const onChangeOrder = (e) => { setAlphabetic(e.target.value)}
    return (
        <div>
            <TitleBox><TitleIn>kLab - eCommerce</TitleIn></TitleBox>
            <ButtonBox>
            <ButtonIn onClick={() => goBack(navigate)}>Voltar</ButtonIn>
            <InputIn placeholder='busca por nome' value={search} onChange={onChangeInput} />
            <Select onChange={onChangeSelect} value={order}>
                    <option value={0}>Todos os Produtos</option>
                    <option value={50}>Acima de 50 Produtos</option>
                    <option value={75}>Acima de 75 Produtos</option>
            </Select>
            <Select onChange={onChangeOrder} value={alphabetic}>
                    <option value={0}>Ordenação Alfabética</option>
                    <option value={1}>A - Z</option>
            </Select>
            <ButtonIn onClick={() => goHome(navigate)}>Produtos</ButtonIn>
            </ButtonBox>
        </div>
    )
}
