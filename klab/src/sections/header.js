import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../global/globalContext';
import { goHome, goInventory, goBack } from '../routes/coordinator'
import { Title, TitleBox, ButtonBox, Button } from '../styled/homeStyled'
import { TitleIn, ButtonIn, InputIn } from '../styled/invStyled'
import { ButtonProd } from '../styled/prodStyled'


export function HeaderHome() {
    const navigate = useNavigate()
     const [search, setSearch ] = useState("");
   
    const onChangeInput = (e) => { setSearch(e.target.value) }

    return (
        <div>
            <TitleBox><TitleIn>kLab - eCommerce</TitleIn></TitleBox>
            <ButtonBox>
                <ButtonProd onClick={() => goBack(navigate)}>Voltar</ButtonProd>
                <InputIn placeholder='busca por nome' value={search} onChange={onChangeInput} />
                <ButtonProd onClick={() => goInventory(navigate)}>Estoque</ButtonProd>
            </ButtonBox>
        </div>
    )
};
export function HeaderInventory() {
    const navigate = useNavigate()
    const [ values, setValues ] = useState("")
    const { search, setSearch, order, setOrder } = useContext(GlobalContext)
    const onChangeInput = (e) => { setSearch(e.target.value) }
    const onChangeValue = (e) => { setValues(e.target.value) }
    const onChangeSelect = (e) => { setOrder(e.target.value)}
    return (
        <div>
            <TitleBox><TitleIn>kLab - eCommerce</TitleIn></TitleBox>
            <ButtonBox>
            <ButtonIn onClick={() => goBack(navigate)}>Voltar</ButtonIn>
            <InputIn placeholder='busca por nome' value={search} onChange={onChangeInput} />
            <select onChange={onChangeSelect} value={order}>
                    <option value={0}>Todos os Produtos</option>
                    <option value={50}>Acima de 50 Produtos</option>
                    <option value={75}>Acima de 75 Produtos</option>
            </select>
            <ButtonIn onClick={() => goHome(navigate)}>Produtos</ButtonIn>
            </ButtonBox>
        </div>
    )
}
export function Header() {
    const navigate = useNavigate()

    return (
        <div>
            <TitleBox><Title>kLab - eCommerce</Title> </TitleBox>
            <ButtonBox>
                <Button onClick={() => goHome(navigate)}>Produtos</Button>
                <Button onClick={() => goInventory(navigate)}>Estoque</Button>
            </ButtonBox>
        </div>
    )
}

